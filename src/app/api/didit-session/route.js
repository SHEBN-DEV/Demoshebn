import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const host = req.headers.get("host");
        const protocol = host.includes("localhost") ? "http" : "https";
        const callbackUrl = `${protocol}://${host}/api/didit-callback`;
        console.log({ body });

        const response = await fetch("https://verification.didit.me/v2/session/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": process.env.DIDIT_API_KEY
            },
            body: JSON.stringify({
                workflow_id: process.env.DIDIT_WORKFLOW_ID,
                callback: callbackUrl,
                vendor_data: body.userId || "temp-user",
                metadata: { user_type: "standard" },
                contact_details: {
                    email: body.email,
                    email_lang: "en",
                    phone: body.phone || "+10000000000"
                }
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.log({ data });
            throw new Error(data.message || "Error creando sesión Didit");
        }

        return NextResponse.json({ url: data.url });
    } catch (err) {
        console.error("Error Didit:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
