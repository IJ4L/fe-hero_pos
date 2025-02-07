import { startFeature, feature } from '@/constant/featureData'

const Feature = () => {
	const bgColor = ['bg-blue-200', 'bg-red-200', 'bg-yellow-200', 'bg-green-200'];
	const textColor = ['text-blue-600', 'text-red-600', 'text-yellow-600', 'text-green-600'];

	return (
		<section id='features' className='flex flex-col justify-center items-center py-20 mt-28 bg-lightGray'>
			<p className="px-4 py-0.5 border border-secondary inline-block text-md font-bold text-secondary rounded-full cursor-pointer hover:border-primary">
				Packed with Features
			</p>
			<h1 className='text-4xl md:text-5xl text-center font-regular flex items-center justify-center text-secondary mt-4'>
				Analytics - Inventory - Checkout ✨
			</h1>
			<h4 className="text-lg md:text-md text-secondary mt-2">
				ready to get started?
			</h4>
			<div className='animate-slide-up flex flex-col md:flex-row md:space-x-14'>
				{
					startFeature.map((item, index) => {
						return (
							<div key={index} className='flex space-x-4 p-6 bg-primary rounded-xl mt-8'>
								<div className='flex-shrink-0 w-14 h-14 p-3 bg-white rounded-xl flex justify-center items-center'>
									<img
										className='h-full w-auto object-contain'
										src='src/assets/icons/arrow.png'
										alt='arrow.png'
									/>
								</div>
								<div className='flex flex-col items-start space-y-2'>
									<p className='font-semibold text-xl text-white'>{item.title}</p>
									<p className='w-44 text-white text-sm'>{item.description}</p>
									<div className='bg-secondary text-white font-semibold text-sm rounded-full px-3 py-1'>{item.language}</div>
								</div>
							</div>
						);
					})
				}
			</div>
			<div className='grid px-6 md:grid-cols-2 md:gap-8 items-center md:w-3/4 xl:w-1/2 mt-14'>
				{
					feature.map((item, index) => {
						return (
							<div key={index} className='flex flex-row items-start justify-center space-x-6 h-48'>
								<div className='flex-shrink-0 w-14 h-14 p-3 bg-white rounded-xl flex justify-center items-center'>
									<img
										className='h-full w-auto object-contain'
										src={item.img}
										alt='arrow.png'
									/>
								</div>
								<div className='flex flex-col items-start space-y-3'>
									<p className='font-semibold text-xl text-secondary'>{item.title}</p>
									<p className=' text-darkGray text-sm'>{item.description}</p>
									<div className={`${textColor[index]} font-semibold text-sm rounded-full px-3 py-1 ${bgColor[index]}`}>
										{item.language}
									</div>
								</div>
							</div>
						);
					})
				}
			</div>
		</section>
	);
}

export default Feature;