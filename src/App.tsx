import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { BsArrow90DegRight } from 'react-icons/bs';
import Spinner from './components/Spinner';
import { motion } from 'framer-motion';
import { CiMail } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa6';

function App() {
	const [page, setPagee] = useState(2);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	if (loading) {
		return (
			
			<div className='h-screen w-screen flex flex-col items-center justify-center'>
				<div className=' w-[200px] md:w-[400px]'>
					<Spinner />
				</div>
				<h1 className='text-gray-800 md:text-2xl text-base font-semibold risque-regular'>
					Theophilus Nkwuda | Web Developer
				</h1>
			</div>
		);
	}
	return (
		<>
			<div className=' h-screen max-w-[1450px] bg-white mx-auto flex flex-col-reverse justify-center'>
				<div className=' flex items-center  fixed top-5 left-1/2 -translate-x-1/2  p-1  bg-gray-50 border border-gray-200 rounded-full '>
					<button
						onClick={() => {
							setLoading(true);
							setTimeout(() => {
								setLoading(false);
								setPagee(0);
							}, 800);
						}}
						className={`${
							page == 0 ? 'bg-gray-800 text-white' : ''
						} px-7 py-2 rounded-full`}
					>
						Projects
					</button>
					<button
						onClick={() => {
							setLoading(true);
							setTimeout(() => {
								setLoading(false);
								setPagee(1);
							}, 800);
						}}
						className={`${
							page == 1 ? 'bg-gray-800 text-white' : ''
						} px-7 py-2 rounded-full text-gray-700`}
					>
						About
					</button>
					<button
						onClick={() => {
							setLoading(true);
							setTimeout(() => {
								setLoading(false);
								setPagee(2);
							}, 800);
						}}
						className={`${
							page == 2 ? 'bg-gray-800 text-white' : ''
						} px-7 py-2 rounded-full text-gray-700`}
					>
						Contact
					</button>
				</div>
				<div className=' flex justify-center  mt-20 lg:mt-[25vh] gap-x-10 '>
					<div className='hidden lg:block pl-5 w-[400px]'>
						<div className='w-full'>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
							>
								<h1 className='text-[2.5rem] font-bold tracking-tighter text-gray-800  '>
									Theophilus Nkwuda
								</h1>
								<p className='text-gray-500 font-semibold text-2xl risque-regular tracking-tighter'>
									Web Developer | Fullstack developer
								</p>
							</motion.div>
							{page != 1 && (
								<ul className='mt-5 text-lg'>
									<motion.li
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1 }}
										className='flex gap-10 justify-between border-t border-gray-200 py-2'
									>
										<p className='text-gray-500 font-medium te tracking-tighter'>
											Currently
										</p>
										<p>Freelancing</p>
									</motion.li>
									<li className='flex gap-10 justify-between border-t border-gray-200 py-2'>
										<p className='text-gray-500 font-medium te tracking-tighter'>
											Specializes in
										</p>
										<p className='text-base'>
											Web Development
										</p>
									</li>
									<li className='flex gap-10 justify-between border-y border-gray-200 py-5 mt-3'>
										<p className='text-gray-500 font-medium te tracking-tighter'>
											Location
										</p>
										<p className='text-base'>
											Lagos, Nigeria
										</p>
									</li>
								</ul>
							)}
						</div>
						<div className='mt-10'>
							{page != 1 ? (
								<>
									<h2 className='text-lg font-semibold text-gray-800'>
										Projects
									</h2>
									<ul className='mt-5 flex flex-col gap-5'>
										<li className='hover:bg-gray-50 transition-all duration-300 hover:translate-x-1 bg-gray-50 rounded-md p-2'>
											<a
												href='#mailhub'
												className='flex gap-2 w-full'
											>
												<div className='w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center'>
													<a
														className='relative flex items-center mx-1 gap-[1px] text-gray-700'
														href={'/'}
													>
														<CiMail size={18} />
														Hub
														<span className='absolute -bottom-2 left-0 h-3 w-3  rounded-full bg-yellow-500 transition-all ease-in-out group-hover:right-2'></span>
														<span className='absolute right-0 -top-2 h-3 w-3  rounded-full bg-green-600 transition-all ease-in-out group-hover:left-0'></span>
													</a>
												</div>
												<div className='flex justify-between items-center w-[80%]'>
													<div>
														<h2 className='flex items-center gap-2'>
															MailHub{' '}
															<span className='text-green-500 font-medium text-xs border border-green-500 rounded-full px-2 py-[2px]'>
																in progress...
															</span>
														</h2>
														<p className='text-gray-500 font-medium text-sm'>
															All your mailbox
															into one app
														</p>
													</div>
													<div className='text-gray-500 font-medium text-sm border border-gray-200 rounded-full px-4 py-1'>
														<p>2025</p>
													</div>
												</div>
											</a>
										</li>
										<li className='hover:bg-gray-50 transition-all duration-300 hover:translate-x-1 bg-gray-50 rounded-md p-2'>
											<a
												href='#grevego'
												className='flex gap-2 w-full'
											>
												<div className='w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center'>
													<img
														src={'/grevego.svg'}
														alt=''
														className='w-[50px] h-[50px] object-cover'
													/>
												</div>
												<div className='flex justify-between items-center w-[80%]'>
													<div>
														<h2>Grevego</h2>
														<p className='text-gray-500 font-medium text-sm'>
															A market place
														</p>
													</div>
													<div className='text-gray-500 font-medium text-sm border border-gray-200 rounded-full px-4 py-1'>
														<p>2025</p>
													</div>
												</div>
											</a>
										</li>
										<li className='hover:bg-gray-50 transition-all duration-300 hover:translate-x-1 bg-gray-50 rounded-md p-2'>
											<a
												href='#webmekanic'
												className='flex gap-2 w-full'
											>
												<div className='w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center'>
													<img
														src='/webmekanic.png'
														className='h-1/2 '
													/>
												</div>
												<div className='flex justify-between items-center w-[80%]'>
													<div>
														<h2>WebMekanic</h2>
														<p className='text-gray-500 font-medium text-sm'>
															Digital web agency
														</p>
													</div>
													<div className='text-gray-500 font-medium text-sm border border-gray-200 rounded-full px-4 py-1'>
														<p>2024</p>
													</div>
												</div>
											</a>
										</li>
										<li className='hover:bg-gray-50 transition-all duration-300 hover:translate-x-1 bg-gray-50 rounded-md p-2'>
											<a
												href='#weholdahand'
												className='flex gap-2 w-full'
											>
												<div className='w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center'>
													<img
														src={'/weholdahand.png'}
														alt=''
														className='w- h-1/2 object-cover'
													/>
												</div>
												<div className='flex justify-between items-center w-[80%]'>
													<div>
														<h2>Weholdahand</h2>
														<p className='text-gray-500 font-medium text-sm'>
															Mental Health
															platform
														</p>
													</div>
													<div className='text-gray-500 font-medium text-sm border border-gray-200 rounded-full px-4 py-1'>
														<p>2023</p>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</>
							) : (
								<div className='text-gray-700 -mt-5 border-t border-gray-300 pt-5'>
									<p className='text-balance text-lg'>
										Frontend Developer by profession and a
										tech visionary by heart. I specialize in
										crafting responsive and optimized
										applications using React, Next.js, and
										cutting-edge front-end technologies.
										Currently – building intuitive user
										experiences at MailHub (AI SaaS).
									</p>
									<ul className='flex flex-col gap-5 mt-10 font-medium'>
										<li className='flex gap-2 items-center justify-between border-b border-gray-300 pb-2'>
											<a href='#experience'>Experience</a>
											<BsArrow90DegRight />
										</li>
										<li className='flex gap-2 items-center justify-between border-b border-gray-300 pb-2'>
											<a href='#expertise'>Expertise</a>
											<BsArrow90DegRight />
										</li>
										<li className='flex gap-2 items-center justify-between border-b border-gray-300 pb-2'>
											<a href='#education'>Education</a>
											<BsArrow90DegRight />
										</li>
										<li className='flex gap-2 items-center justify-between border-b border-gray-300 pb-2'>
											<a href='#socials'>Socials</a>
											<BsArrow90DegRight />
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
					<div className='  h-[calc(100vh-100px)]  lg:w-[900px]  overflow-y-auto max-w-[1000px]   pl-5 pr-5 no-scrollbar '>
						{page == 0 && <Projects />}
						{page == 1 && <About />}
						{page == 2 && <Contact />}
					</div>
				</div>
			</div>
			<div className='fixed right-3 bottom-6 bg-gray-800 px-7 py-3 rounded-full'>
				<a
					href='https://calendly.com/theophilusonyebuchinkwuda/30min'
					className='flex items-center gap-4 capitalize text-gray-50 font-semibold'
				>
					<FaPhone size={20} /> reach me
				</a>
			</div>
		</>
	);
}

export default App;
