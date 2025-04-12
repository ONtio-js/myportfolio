import { IoLogoFacebook } from 'react-icons/io5';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
const Contact = () => {
	return (
		<div >
			<motion.div 
				initial={{ opacity: 0, y: 10, scale: 0.9 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.5 }}
				className='md:h-[500px] w-full bg-gray-100 flex flex-col items-center gap-y-10 py-10'
			>
				<h1 className='text-[35px] md:text-[85px] max-w-[1000px] font-bold tracking-tight leading-[1] oswald uppercase text-center pt-10 md:px-10 px-5 text-gray-800'>
					ready to level up your website?
				</h1>
				<a
					href='https://calendly.com/theophilusonyebuchinkwuda/30min'
					className='text-center text-gray-500 font-medium border border-gray-400 rounded-full py-4 px-10 hover:bg-gray-800 hover:text-white transition-all duration-500'
				>
					Let's talk about your project
				</a>
			</motion.div>
			<div className='grid md:grid-cols-3'>
				<div className=' md:col-span-2 md:pr-10'>
					<ContactForm />
				</div>
				<div className=' col-span-1 grid grid-cols-2 gap-2 max-h-[500px] py-10'>
					<div className='col-span-2 ease-in-out hover:bg-gray-800 hover:text-white transition-all duration-500 bg-gray-200 h-[130px] w-full rounded-md flex items-center justify-center text-gray-600'>
						<a
							href='https://www.facebook.com/tiocode'
							className='flex items-center gap-2'
						>
							<IoLogoFacebook size={20} /> Facebook
						</a>
					</div>
					<div className='col-span-1 ease-in-out hover:bg-gray-800 hover:text-white transition-all duration-500 bg-gray-200 h-[100px] w-full rounded-md flex items-center justify-center text-gray-600'>
						<a
							href='https://x.com/tiocode_'
							className='flex items-center gap-2'
						>
							<FaXTwitter size={20} />
							Twitter
						</a>
					</div>
					<div className='col-span-1 ease-in-out hover:bg-gray-800 hover:text-white transition-all duration-500 bg-gray-200 h-[100px] w-full rounded-md flex items-center justify-center text-gray-600'>
						<a
							href='https://www.instagram.com/tioc0de'
							className='flex items-center gap-2'
						>
							<FaInstagram size={20} />
							Instagram
						</a>
					</div>
					<div className='col-span-2 ease-in-out hover:bg-gray-800 hover:text-white transition-all duration-500 bg-gray-200 h-[130px] rounded-md w-full flex items-center justify-center text-gray-600'>
						<a
							href='https://www.linkedin.com/in/ontiojs1'
							className='flex items-center gap-2'
						>
							<FaLinkedin size={20} />
							LinkedIn
						</a>
					</div>
					<div className='col-span-1 ease-in-out hover:bg-gray-800 hover:text-white transition-all duration-500 rounded-md bg-gray-200 h-[100px] w-full flex items-center justify-center text-gray-600'>
						<a
							href='https://github.com/ONtio-js'
							className='flex items-center gap-2'
						>
							<FaGithub size={20} />
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
