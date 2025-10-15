"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { supabase } from "../SupabaseClient";

const Messages = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  // Obtener usuario (quiza sería bueno usar react-query)
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) setCurrentUser(user);
    };
    getUser();
  }, []);

  // carga de usuarios (ajustar segun la tabla)
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("id, name, avatar");
      if (error) console.error("Error cargando usuarios:", error);
      else setUsers(data || []);
    };
    fetchUsers();
  }, []);

  // suscribir realtime (lo mismo, ajustar segun tabla de supabase)
  useEffect(() => {
    if (!selectedUser || !currentUser) return;

    const channel = supabase
      .channel("messages-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
          filter: `or(sender_id.eq.${selectedUser.id},receiver_id.eq.${selectedUser.id})`,
        },
        (payload) => {
          if (payload.new) {
            setMessages((prev) => [...prev, payload.new]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedUser, currentUser]);

  // carga de historial del chat
  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser || !currentUser) return;
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(
          `and(sender_id.eq.${currentUser.id},receiver_id.eq.${selectedUser.id}),
           and(sender_id.eq.${selectedUser.id},receiver_id.eq.${currentUser.id})`
        )
        .order("created_at", { ascending: true });

      if (error) console.error("Error cargando mensajes:", error);
      else setMessages(data || []);
    };
    fetchMessages();
  }, [selectedUser, currentUser]);


  const handleSend = async () => {
    if (!newMessage.trim() || !selectedUser || !currentUser) return;

    const { error } = await supabase.from("messages").insert({
      sender_id: currentUser.id,
      receiver_id: selectedUser.id,
      content: newMessage.trim(),
    });

    if (error) console.error("Error enviando mensaje:", error);
     else setNewMessage("");
  };

  const filteredUsers = users.filter((u) =>
    u.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" flex justify-center bg-[#1a1718] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat principal */}
      <div className="flex flex-1">
        <div className="w-1/3 border-r border-gray-700 p-4">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-3 rounded bg-gray-800 text-white outline-none"
          />

          <div className="overflow-y-auto max-h-[75vh] space-y-2">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`p-2 rounded cursor-pointer flex items-center gap-3 ${
                  selectedUser?.id === user.id
                    ? "bg-gray-700"
                    : "hover:bg-gray-800"
                }`}
              >
                <img
                  src={user.avatar || "/default-avatar.png"}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <span>{user.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="flex flex-col w-2/3 p-4 h-[calc(100vh-2rem)]">
          {selectedUser ? (
            <>
              <div className="border-b border-gray-700 pb-2 mb-4">
                <h2 className="text-lg font-semibold">
                  Chat con {selectedUser.name}
                </h2>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender_id === currentUser?.id
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl max-w-xs ${
                        msg.sender_id === currentUser?.id
                          ? "bg-blue-600"
                          : "bg-gray-700"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 p-2 rounded bg-gray-800 text-white outline-none"
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
                >
                  Enviar
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center flex-1 text-gray-400">
              Selecciona un chat para comenzar
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
