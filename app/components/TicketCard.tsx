import Link from 'next/link';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressBar from './ProgressBar';
import StatusDisplay from './StatusDisplay';

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

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard = ({ ticket }: TicketCardProps) => {
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
      <div className='flex mb-3 '>
        <PriorityDisplay priority={ticket.priority} />
        <div className='ml-auto'>
          <DeleteBlock id={ticket._id} />
        </div>
      </div>

      <Link
        href={`/tickets-page/${ticket._id}`}
        style={{ display: 'contents' }}
      >
        <h4>{ticket.title}</h4>
        <hr className='h-px border-0 bg-page mb-2' />
        <p className='whitespace-pre-wrap'>{ticket.description}</p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
          <div className='flex flex-col'>
            <p className='text-xs my-1'>
              {new Date(ticket.createdDate).toLocaleDateString('fr-FR')}
            </p>
            <ProgressBar progress={ticket.progress} />
          </div>
          <div className='ml-auto flex items-end'>
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
