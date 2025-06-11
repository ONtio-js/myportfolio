import { IoLogoFacebook } from 'react-icons/io5';
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
const About = () => {
	return (
		<div className='overflow-x-hidden max-w-[400px]'>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='h-[500px] w-full bg-gray-100 flex items-center justify-center  '
			>
				{/* my profile picture?/ */}
				<img
					src={'/theophilus.webp'}
					alt=''
					className='w-[500px] h-[500px]  object-cover'
				/>
			</motion.div>
			<div
				id='experience'
				className='mt-10 border-t-1 border-gray-200 pt-5 no-scrollbar overflow-x-auto'
			>
				<h2 className='text-4xl font-bold tracking-loose risque-regular'>
					Experience
				</h2>
				<ul className='flex flex-col gap-3 mt-5 min-w-[800px]'>
					<li className='flex items-center justify-between p-5  text-gray-600 rounded-md '>
						<h4>2024 - present</h4>
						<p>Frontend developer</p>
						<p>webMekanic</p>
						<p>Digital marketing/web design agency</p>
					</li>
					<li className='flex items-center justify-between p-5 bg-gray-50 text-gray-600 rounded-md'>
						<h4>2023 - 2024</h4>
						<p>Frontend developer</p>
						<p>Weholdahand</p>
						<p>Mental health therapy platform</p>
					</li>
				</ul>
			</div>
			<div
				id='expertise'
				className='mt-10 border-t-1 border-gray-200 pt-5'
			>
				<h2 className='text-4xl font-bold tracking-loose risque-regular'>
					Expertise
				</h2>
				<ul className='flex flex-wrap gap-4 mt-5'>
					<li className='hover:bg-gray-50 hover:translate-x-1  transition-all duration-300 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						html5
					</li>
					<li className='  hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						CSS3
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						JavaScript
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						React
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						Typescript
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						Next.js
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						Tailwind CSS
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						Node.js
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						Express
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						MongoDB
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						Non-code development(Framer)
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						Git/Github
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						Docker
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						AWS
					</li>
				</ul>
			</div>
			<div
				id='education'
				className='mt-10 border-t-1 border-gray-200 pt-5 overflow-x-auto no-scrollbar'
			>
				<h2 className='text-4xl font-bold tracking-loose risque-regular'>
					Education
				</h2>
				<ul className='flex flex-col gap-3 mt-5 min-w-[800px]'>
					<li className='flex items-center justify-between px-5 py-5 bg-gray-50 text-gray-600 rounded-md'>
						<h4>2018 - 2024</h4>
						<p>Bachelor of Engineering in Civil Engineering</p>
						<p>Federal University of Technology, Owerri</p>
					</li>
					<li className='flex items-center justify-between px-5 py-1 text-gray-600 rounded-md'>
						<h4>2016 - 2018</h4>
						<p>Autocad/Revit Training</p>
						<p className='text-center '>
							Ifocon Training Institute,Benin City
						</p>
					</li>
					<li className='flex items-center justify-between px-5 py-5 bg-gray-50 text-gray-600 rounded-md'>
						<h4>2010 - 2016</h4>
						<p>Senior Secondary School</p>
						<p className='text-center '>
							12 Apostles College,Sharon, Ebonyi State
						</p>
					</li>
				</ul>
			</div>
			<div
				id='socials'
				className='mt-10 border-t-1 border-gray-200 pt-5 pb-20'
			>
				<h2 className='text-4xl font-bold tracking-loose risque-regular'>
					Socials
				</h2>
				<ul className='flex flex-wrap gap-4 mt-5'>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						<a
							href='https://www.facebook.com/tiocode'
							className='flex items-center gap-2'
						>
							<IoLogoFacebook /> Facebook
						</a>
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						<a
							href='https://x.com/tiocode_'
							className='flex items-center gap-2'
						>
							<FaXTwitter />
							Twitter
						</a>
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						<a
							href='https://www.instagram.com/tioc0de'
							className='flex items-center gap-2'
						>
							<FaInstagram />
							Instagram
						</a>
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						<a
							href='https://www.linkedin.com/in/ontiojs1'
							className='flex items-center gap-2'
						>
							<FaLinkedin />
							LinkedIn
						</a>
					</li>
					<li className=' hover:translate-x-1  transition-all duration-300 hover:bg-gray-50 px-4 py-1 border rounded-full text-gray-600 capitalize border-gray-300'>
						<a
							href='https://github.com/ONtio-js'
							className='flex items-center gap-2'
						>
							<FaGithub />
							Github
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
