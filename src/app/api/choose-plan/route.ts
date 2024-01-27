import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  console.log('choose-plan body: ', body);

  return NextResponse.json({ body });
}
