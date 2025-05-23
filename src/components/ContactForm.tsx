import FormField from './FormField';
import Loader from './Loader';
import { useState, useEffect } from 'react';

type FormState = {
	success: boolean;
	message?: string;
	errors?: string[];
} | null;

const ContactForm = () => {
	const [state, setState] = useState<FormState>(null);
	const [isPending, setIsPending] = useState(false);

	const handleSubmit = async (formData: FormData) => {
		setIsPending(true);
		try {
			const response = await fetch('https://formspree.io/f/xpwpbepg', {
				method: 'POST',
				body: formData,
				headers: {
					Accept: 'application/json',
				},
			});

			const data = await response.json();

			if (response.ok) {
				setState({
					success: true,
					message: 'Message sent successfully!',
				});
			} else {
				setState({
					success: false,
					errors: data.errors || [
						'Oops! There was a problem submitting your form',
					],
				});
			}
		} catch (error) {
			setState({
				success: false,
				errors: ['Oops! There was a problem submitting your form'],
			});
		} finally {
			setIsPending(false);
		}
	};

	useEffect(() => {
		if (state?.success) {
			const timer = setTimeout(() => {
				setState(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [state]);

	return (
		<form
			action={handleSubmit}
			className='w-full py-10'
		>
			{isPending && (
				<div className='flex items-center h-7 justify-center'>
					<Loader />
				</div>
			)}
			{state?.success && (
				<div className='text-green-500 mb-4 text-center bg-green-200/50 py-2 rounded-md'>
					{state.message}
				</div>
			)}
			{state?.errors && (
				<div className='text-red-500 mb-4 bg-red-200/50 text-center py-2 rounded-md'>
					{state.errors[0]}
				</div>
			)}
			<FormField
				label='Name'
				type='text'
				name='name'
				placeholder='Enter your name'
				required
			/>
			<FormField
				label='Email'
				type='email'
				name='email'
				placeholder='Enter your email'
				required
			/>
			<FormField
				label='Subject'
				type='text'
				name='subject'
				placeholder='Enter subject of your message'
				required
			/>
			<h2 className='text-gray-500 font-medium my-4 mx-5'>Message</h2>
			<textarea
				name='message'
				id='message'
				rows={5}
				cols={0}
				placeholder='Enter your message'
				className='w-full border border-gray-300 rounded-md p-5 focus:outline-none'
				required
			/>
			<button
				type='submit'
				disabled={isPending}
				className='bg-gray-800 text-white font-medium py-4 px-10 rounded-md mt-4 hover:bg-gray-900 transition-all duration-500'
			>
				Send Message
			</button>
		</form>
	);
};

export default ContactForm;
