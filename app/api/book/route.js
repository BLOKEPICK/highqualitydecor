import { NextResponse } from 'next/server'

export async function POST(req){
  const text = await req.text()
  console.log('New booking request:', text)
  return NextResponse.json({ ok:true })
}
