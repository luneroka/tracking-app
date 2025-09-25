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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { value, name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Submitted');
  };

  return (
    <div className='flex justify-center'>
      <form
        className='flex flex-col gap-3 w-1/2'
        method='post'
        onSubmit={handleSubmit}
      >
        <h3>Create your ticket</h3>

        {/* Title */}
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={handleChange}
          required
          value={formData.title}
        />

        {/* Description */}
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          onChange={handleChange}
          required
          value={formData.description}
          rows={5}
        />

        {/* Category */}
        <label htmlFor=''>Category</label>
        <select
          name='category'
          id=''
          value={formData.category}
          onChange={handleChange}
        >
          <option value='Bug'>Bug</option>
          <option value='Feature'>Feature</option>
          <option value='Improvement'>Improvement</option>
          <option value='Support'>Support</option>
        </select>

        {/* Priority */}
        <label htmlFor=''>Priority</label>
        <div>
          <input
            id='priority-1'
            name='priority'
            type='radio'
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id='priority-2'
            name='priority'
            type='radio'
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id='priority-3'
            name='priority'
            type='radio'
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id='priority-4'
            name='priority'
            type='radio'
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id='priority-5'
            name='priority'
            type='radio'
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        {/* Progress */}
        <label htmlFor=''>Progress</label>
        <input
          type='range'
          id='progress'
          name='progress'
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />

        {/* Status */}
        <label htmlFor=''>Status</label>
        <select name='status' value={formData.status} onChange={handleChange}>
          <option value='Not Started'>Not Started</option>
          <option value='In Progress'>In Progress</option>
          <option value='Completed'>Completed</option>
          <option value='On Hold'>On Hold</option>
        </select>

        {/* Submit Button */}
        <input type='submit' className='btn' value='Create Ticket' />
      </form>
    </div>
  );
};

export default TicketForm;
