import TicketForm from '@/app/components/TicketForm';

interface TicketData {
  _id?: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  active: boolean;
}

const getTicketById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to get ticket');
  }

  return res.json();
};

const TicketPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const EDITMODE = id !== 'new';
  let updateTicketData: TicketData;

  if (EDITMODE) {
    const response = await getTicketById(id);
    updateTicketData = response.foundTicket; // API returns { foundTicket }
  } else {
    updateTicketData = {
      _id: 'new',
      title: '',
      description: '',
      category: 'Bug',
      priority: 1,
      progress: 0,
      status: 'Not Started',
      active: false,
    };
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
