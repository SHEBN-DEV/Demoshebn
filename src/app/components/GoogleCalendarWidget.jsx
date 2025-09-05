"use client";

import React, { useEffect, useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";
import { createClient } from "@supabase/supabase-js";
import { RefreshCw, Calendar as CalendarIcon } from "lucide-react";

// 🎯 Conexión con Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const GoogleCalendarWidget = () => {
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [gapiReady, setGapiReady] = useState(false);

  // 🚀 Cargar script y preparar cliente de Google API
  const initGoogleClient = () => {
    if (!window.gapi) {
      console.error("gapi no está definido");
      return;
    }

    window.gapi.load("client:auth2", async () => {
      try {
        await window.gapi.client.init({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
          clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: "https://www.googleapis.com/auth/calendar.readonly",
        });
        setGapiReady(true);
      } catch (err) {
        console.error("Error al inicializar GAPI:", err);
      }
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = initGoogleClient;
    document.body.appendChild(script);
  }, []);

  // 🔁 Sincronizar eventos desde Google Calendar
  const syncEventsFromGoogle = async () => {
    try {
      const auth = window.gapi.auth2.getAuthInstance();
      if (!auth.isSignedIn.get()) await auth.signIn();

      const res = await window.gapi.client.calendar.events.list({
        calendarId: "primary",
        timeMin: startOfMonth(currentMonth).toISOString(),
        timeMax: endOfMonth(currentMonth).toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      });

      const googleEvents = res.result.items.map((ev) => ({
        google_id: ev.id,
        title: ev.summary,
        date: ev.start?.dateTime || ev.start?.date,
        location: ev.location || null,
        description: ev.description || null,
      }));

      // 🗃️ Guardar en Supabase (con upsert por google_id)
      await supabase
        .from("events")
        .upsert(googleEvents, { onConflict: "google_id" });

      setEvents(googleEvents);
    } catch (err) {
      console.error("Error al sincronizar eventos:", err);
    }
  };

  // 📅 Generar días del mes actual
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // 🎨 Renderizar la UI
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-pink-500" /> Calendar
          </h2>
          <button
            onClick={syncEventsFromGoogle}
            disabled={!gapiReady}
            className="flex items-center gap-2 bg-pink-600 px-4 py-2 rounded font-semibold text-white hover:bg-pink-700"
          >
            <RefreshCw className="w-4 h-4" /> Sync
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {daysInMonth.map((day) => {
            const event = events.find((ev) =>
              isSameDay(new Date(ev.date), day)
            );
            return (
              <div
                key={day.toISOString()}
                className="border border-pink-500/30 rounded p-2 min-h-[70px]"
              >
                <div className="text-sm font-semibold text-pink-300">
                  {format(day, "d")}
                </div>
                {event && (
                  <div className="mt-1 text-xs bg-pink-700/30 px-2 py-0.5 rounded">
                    {event.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GoogleCalendarWidget;
