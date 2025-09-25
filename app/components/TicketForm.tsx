'use client';

import { useState } from 'react';

interface TicketData {
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  active: boolean;
}

const TicketForm = () => {
  const startingTicketData: TicketData = {
    title: '',
    description: '',
    category: 'Bug',
    priority: 1,
    progress: 0,
    status: 'Not Started',
    active: false,
  };

  const [formData, setFormData] = useState<TicketData>(startingTicketData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='flex justify-center'>
      <form>
        <h3>Create your ticket</h3>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={handleChange}
          required
          value={formData.title}
        />
      </form>
    </div>
  );
};

export default TicketForm;
