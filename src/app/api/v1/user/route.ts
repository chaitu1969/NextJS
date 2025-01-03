import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ username: "chaitu", email: "chaitu@gmail.com" });
}

export async function POST() {
  return NextResponse.json({ username: "chaitu", email: "chaitu@gmail.com" });
}
