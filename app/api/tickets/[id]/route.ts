import { TicketModel } from '@/app/lib/models/Ticket';
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    await TicketModel.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Ticket deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting ticket:', error);
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
