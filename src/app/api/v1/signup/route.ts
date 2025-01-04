import { NextRequest, NextResponse } from "next/server";
import client from "../../../lib/db";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = await client.user.create({ data: { username, password } });

  return NextResponse.json({
    message: "successfully signed",
    user: user.id,
  });
}
