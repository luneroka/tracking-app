'use client';

import { useRouter } from 'next/navigation';
import { FaXmark } from 'react-icons/fa6';

interface DeleteBockProps {
  id: string;
}

const DeleteBlock = ({ id }: DeleteBockProps) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FaXmark
      className='text-red-400 hover:text-red-200 cursor-pointer'
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
