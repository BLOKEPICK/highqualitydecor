import { NextResponse } from 'next/server'

export async function POST(req: Request){
  // Stub: In production, send to email/CRM/Slack/etc.
  const data = await req.text()
  console.log('New booking request:', data)
  return NextResponse.json({ ok: true })
}
