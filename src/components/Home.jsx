const Home = () => {
  return (
    <>
      <main className="w-full container mx-auto px-6 md:pt-44 pt-32 md:pb-48 pb-24">
        <div className="md:w-1/2 w-full">
          <h4 className="text-white text-xl font-semibold">Hai</h4>
          <h1 className="text-white md:text-6xl text-4xl font-bold tracking-wider">
            Fachri Muzaki
          </h1>
          <p className="text-slate-300 font-lora text-lg mt-4">
            Students Majoring in Information System
          </p>
          <div className="mt-6 flex md:flex-row flex-col items-center gap-8">
            <a
              href=""
              className="bg-white text-center text-primary md:w-1/3 w-full rounded-sm py-3 px-10 font-semibold hover:bg-primary hover:text-white hover:shadow-lg hover:border hover:border-1"
            >
              Hire Me
            </a>
            <a
              href=""
              className="bg-white text-center text-primary  md:w-1/3 w-full rounded-sm py-3 px-12 font-semibold hover:bg-primary hover:text-white hover:shadow-lg hover:border hover:border-1"
            >
              Download CV
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
