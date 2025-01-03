import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  return NextResponse.json({
    message: "successfully signed",
    username,
    password,
  });
}
