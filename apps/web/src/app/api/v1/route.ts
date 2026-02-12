export async function GET() {
  return new Response(
    JSON.stringify({
      status: "ok",
      service: "kodnestcareers-api",
      version: "0.1.0"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", version: "v1", service: "kodnestcareers-api-placeholder" });
}
