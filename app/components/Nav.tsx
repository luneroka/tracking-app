import Link from 'next/link';
import { FaTicketAlt, FaHome } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className='flex justify-between bg-nav p-4'>
      <div className='flex items-center space-x-4'>
        <Link href='/'>
          <FaHome className='icon' />
        </Link>
        <Link href='/tickets-page/new'>
          <FaTicketAlt className='icon' />
        </Link>
      </div>
      <div>
        <p className='text-default-text'>boris@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
