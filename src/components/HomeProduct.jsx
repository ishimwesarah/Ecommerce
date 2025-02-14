import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../style/homeprod.css';

const HomeProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const { names, email, subject, message } = data;

    try {
      const response = await axios.post(
        'https://botiga-kvf9.onrender.com/contact/createContact',
        { names, email, subject, message },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Form submitted successfully:', response.data);
      alert('Form has been submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div>
      <form className='forms' onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Names'
          {...register('names', { required: 'Names are required' })}
        />
        {errors.names && <p className='error'>{errors.names.message}</p>}

        <input
          type='email'
          placeholder='Email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        {errors.email && <p className='error'>{errors.email.message}</p>}

        <input
          type='text'
          placeholder='Subject'
          {...register('subject', { required: 'Subject is required' })}
        />
        {errors.subject && <p className='error'>{errors.subject.message}</p>}

        <textarea
          placeholder='Message'
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p className='error'>{errors.message.message}</p>}

        <button type='submit'>Create Product</button>
      </form>
    </div>
  );
};

export default HomeProduct;
