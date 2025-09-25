import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressBar from './ProgressBar';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock />
      <PriorityDisplay />
      <ProgressBar />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
