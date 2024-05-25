import pool from "@/app/config/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [userDetails] = await pool.query("SELECT * FROM user");
    return NextResponse.json(userDetails);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
