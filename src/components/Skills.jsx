const Skills = () => {
  return(
    <main className="w-full bg-white md:pt-32 pt-28 pb-28" id="skills">
      <div className="container mx-auto px-6">
        <h1 className="text-primary text-center text-3xl font-semibold">Skills</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-6">
            <div className="bg-primary p-8 rounded-lg shadow-lg hover:scale-90 hover:transition-all"> 
              <h1 className="text-white text-center text-xl font-semibold">Web Development</h1>
              <p className="mt-4 text-slate-300 text-lg text-justify">From creating responsive websites to robust web applications, I specialize in crafting digital solutions tailored to your needs.</p>
            </div>
            <div className="bg-primary p-8 rounded-lg shadow-lg hover:scale-90 hover:transition-all"> 
              <h1 className="text-white text-center text-xl font-semibold">UI/UX Design</h1>
              <p className="mt-4 text-slate-300 text-lg text-justify">With a keen eye for aesthetics and user experience, I design interfaces that not only look great but also enhance user satisfaction and engagement.</p>
            </div>
            <div className="bg-primary p-8 rounded-lg shadow-lg hover:scale-90 hover:transition-all"> 
              <h1 className="text-white text-center text-xl font-semibold">Data Analyst</h1>
              <p className="mt-4 text-slate-300 text-lg text-justify">Unlocking insights from data to drive informed decisions. I analyze data to uncover patterns, trends, and opportunities for your business growth.</p>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Skills;