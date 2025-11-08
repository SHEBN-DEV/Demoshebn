import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();

    console.log("Resultado Didit:", body);

    const success = body.gender?.toLowerCase() === "female";

    const html = `
    <script>
      window.parent.postMessage(
        {
          diditVerification: {
            success: ${success},
            gender: "${body.gender || ""}",
            data: ${JSON.stringify(body)}
          }
        },
        "*"
      );
    </script>
  `;

    return new NextResponse(html, {
        headers: { "Content-Type": "text/html" }
    });
}
