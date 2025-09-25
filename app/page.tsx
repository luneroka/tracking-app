import TicketCard from './components/TicketCard';

interface Ticket {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  active: boolean;
  createdDate: Date;
  updatedDate?: Date;
}

const getTickets = async (): Promise<{ tickets: Ticket[] }> => {
  try {
    const res = await fetch('http://localhost:3000/api/tickets', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch tickets');
    }

    return res.json();
  } catch (error) {
    console.log('Failed to fetch tickets', error);
    return { tickets: [] };
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map((ticket: Ticket) => ticket.category)),
  ];

  return (
    <div className='p-5'>
      <div>
        {tickets &&
          uniqueCategories?.map(
            (uniqueCategory: string, categoryIndex: number) => (
              <div key={categoryIndex} className='mb-4'>
                <h2>{uniqueCategory}</h2>
                <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
                  {tickets
                    .filter(
                      (ticket: Ticket) => ticket.category === uniqueCategory
                    )
                    .map((filteredTicket: Ticket, _index: number) => (
                      <TicketCard key={_index} />
                    ))}
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Dashboard;
