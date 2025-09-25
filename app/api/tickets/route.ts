import { TicketModel } from '../../lib/models/Ticket';
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const ticketData = body.formData;
    await TicketModel.create(ticketData);
    return NextResponse.json({ message: 'Ticket created' }, { status: 201 });
  } catch (error) {
    console.error('Error creating ticket:', error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
