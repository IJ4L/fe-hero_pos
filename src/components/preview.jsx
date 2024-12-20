import React from 'react'

const Preview = () => {
  return (
    <section id='examples' className='flex flex-col items-center justify-center mt-8'>
      <p className="px-4 py-0.5 border border-secondary inline-block text-md font-bold text-secondary rounded-full cursor-pointer hover:border-primary">
        Previews
      </p>
      <h1 className='text-5xl font-regular text-secondary mt-4'>
        Examples
      </h1>
      <h4 className="text-lg md:text-md text-secondary mt-2">
        up business grow and thrive.
      </h4>
      <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 mt-4 md:mt-8'>
        <img className='h-96' src='src\assets\images\dashboard.svg' alt='dashboard.png' />
        <img className='h-96' src='src\assets\images\cashier.svg' alt='dashboard.png' />
        <img className='h-96' src='src\assets\images\profile.svg' alt='dashboard.png' />
      </div>
    </section>
  )
}

export default Preview;