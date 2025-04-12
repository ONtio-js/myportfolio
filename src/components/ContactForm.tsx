
import { useState } from 'react';
import FormField from './FormField'
import Loader from './Loader';
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <form action="" className='w-full py-10' onClick={() => setLoading(true)}>
      {loading && <div className='flex items-center justify-center'>
        <Loader />
      </div>}
        <FormField label='Name' type='text' name='name' placeholder='Enter your name' />
        <FormField label='Email' type='email' name='email' placeholder='Enter your email' />
        <FormField label='Subject' type='tel' name='subject' placeholder='Enter subject of your message' />
        <h2 className='text-gray-500 font-medium my-4 mx-5'>Message</h2>
        <textarea name="message" id="message" rows={5} cols={0} placeholder='Enter your message' className='w-full border border-gray-300  rounded-md  p-5 focus:outline-none' />  
        <button type='submit' className='bg-gray-800 text-white font-medium py-4 px-10 rounded-md mx-5 mt-4 hover:bg-gray-900 transition-all duration-500'>Send Message</button>
    </form>
  )
}

export default ContactForm