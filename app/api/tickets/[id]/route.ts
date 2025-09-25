import { TicketModel } from '@/app/lib/models/Ticket';
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const foundTicket = await TicketModel.findOne({ _id: id });
    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    await TicketModel.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Ticket deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting ticket:', error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const ticketData = body.formData;

    await TicketModel.findByIdAndUpdate(id, {
      ...ticketData,
    });
    return NextResponse.json({ message: 'Ticket updated' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting ticket:', error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
