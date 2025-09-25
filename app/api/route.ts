import { TicketModel } from '../lib/models/Ticket';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await TicketModel.create(ticketData);
    return NextResponse.json({ message: 'Ticket created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
