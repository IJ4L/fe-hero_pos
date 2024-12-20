const Maker = () => {
  return (
    <section className="flex flex-col items-center py-20">
      <p className="px-4 py-0.5 border border-secondary inline-block text-md font-bold text-secondary rounded-full cursor-pointer hover:border-primary">
        Introduce
      </p>
      <h1 className='text-4xl md:text-5xl text-center font-regular flex items-center justify-center text-secondary mt-4'>
        Development Team
      </h1>
      <h4 className="text-lg md:text-md text-secondary mt-2">
        hello from we 🙋‍♂️🙋
      </h4>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-8 md:space-y-0 md:space-x-16">
        <div className="flex flex-col items-center">
          <img className="h-96 rounded-xl" src="src\assets\images\ijal.jpg" alt="qila.jpg" />
          <a href="https://www.instagram.com/cyrusccs/?__pwa=1" className="mt-4 text-secondary text-lg font-semibold cursor-pointer hover:text-red-500">Nursyamsu Rijal Usman</a>
          <p className="text-secondary text-md font-normal">Programmer</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="h-96 rounded-xl" src="src\assets\images\qila.jpg" alt="qila.jpg" />
          <a href="https://www.instagram.com/aqilahnfk/?__pwa=1" className="mt-4 text-secondary text-lg font-semibold cursor-pointer hover:text-red-500">Aqilah Azahra</a>
          <p className="text-secondary text-md font-normal">Product Manager</p>
        </div>
      </div>
    </section>
  );
}

export default Maker;