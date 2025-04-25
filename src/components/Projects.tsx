import { motion } from 'framer-motion';
import { GiPadlockOpen } from 'react-icons/gi';
import { IoArrowRedoOutline } from 'react-icons/io5';
import { work1, work2, work3 } from '../assets';
const Projects = () => {
  return (
		<div className='border-t border-gray-200'>
			<motion.div 
				initial={{ translateY: 100 }}
				animate={{ translateY: 0 }}
				transition={{ duration: 0.8 }}
				id='grevego' className='group bg-gray-50 flex flex-col items-center rounded-xl '>
				<div className=' flex items-center justify-between w-full   p-5 bg-white'>
					<div className=''>
						<div className='flex items-center gap-2'>
							<h2 className='md:text-lg text-sm font-medium'>Grevego</h2>
							<div className='px-1 md:px-3 text-xs border border-gray-400 rounded-full text-gray-500 md:text-sm'>
								2025
							</div>
						</div>
						<p className='text-gray-500 text-xs md:text-sm'>A market place</p>
					</div>
					<div>
						<a
							href='https://grevego.com'
							className='flex items-center gap-2 text-gray-700 text-xs md:text-sm'
						>
							<GiPadlockOpen /> go to the project
							<IoArrowRedoOutline />
						</a>
					</div>
				</div>
				<img
					src={work3}
					alt=''
					width={800}
					className='my-10 rounded-xl lg:group-hover:mask-b-from-10% '
				/>
			</motion.div>
			<motion.div id='webmekanic' className='group transition-all ease-in-out duration-500 bg-gray-50 flex flex-col items-center mt-10 rounded-xl border-t-1 border-gray-200'>
				<div className=' flex items-center justify-between w-full   p-5 bg-white'>
					<div className=''>
						<div className='flex items-center gap-2'>
							<h2 className='md:text-lg text-sm font-medium'>webMekanic</h2>
							<div className='px-1 md:px-3 text-xs border border-gray-400 rounded-full text-gray-500 md:text-sm'>
								2024
							</div>
						</div>
						<p className='text-gray-500 text-xs md:text-sm'>
							Digital web agency
						</p>
					</div>
					<div className=''>
						<a
							href='https://webmekanic.com'
							className='flex items-center gap-2 text-gray-700 text-xs md:text-sm'
						>
							<GiPadlockOpen /> go to the project
							<IoArrowRedoOutline />
						</a>
					</div>
				</div>
				<img
					src={work2}
					alt=''
					width={800}
					className='my-10 rounded-xl lg:group-hover:mask-b-from-10%  '
				/>
			</motion.div>
			<motion.div id='weholdahand' className='group bg-gray-50 flex flex-col mt-10 border-t-1 border-gray-200 items-center'>
				<div className=' flex items-center justify-between w-full   p-5 bg-white'>
					<div className=''>
						<div className='flex items-center gap-2'>
							<h2 className='md:text-lg text-sm font-medium'>weholdahand</h2>
							<div className='px-1 md:px-3 text-xs border border-gray-400 rounded-full text-gray-500 md:text-sm'>
								2023
							</div>
						</div>
						<p className='text-gray-500 text-xs md:text-sm'>
							Mental Health therapy 
						</p>
					</div>
					<div>
						<a
							href='https://weholdahand.com'
							className='flex items-center gap-2 text-gray-700 text-xs md:text-sm	'
						>
							<GiPadlockOpen /> go to the project
							<IoArrowRedoOutline />
						</a>
					</div>
				</div>
				<img
					src={work1}
					alt=''
					width={800}
					className='my-10 rounded-xl lg:group-hover:mask-b-from-10% '
				/>
			</motion.div>
		</div>
  );
}

export default Projects