import CoomingSoon from "../assets/images/coomingsoon.jpg";
const Project = () => {
  return (
    <>
      <main
        className="w-full md:pt-32 pt-28 pb-28 container mx-auto px-6"
        id="project"
      >
        <h1 className="text-white text-center text-3xl font-semibold">
          Latest Projects
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-4 gap-y-8 mt-6">
          <div className="p-4 bg-white shadow-lg  rounded-md mx-auto brightness-75">
            <img src={CoomingSoon} alt="" className="w-[400px] rounded-md" />
            <h3 className="text-primary text-xl font-bold mt-4">Project 1</h3>
          </div>
          <div className="p-4 bg-white shadow-lg  rounded-md mx-auto brightness-75">
            <img src={CoomingSoon} alt="" className="w-[400px] rounded-md" />
            <h3 className="text-primary text-xl font-bold mt-4">Project 1</h3>
          </div>
          <div className="p-4 bg-white shadow-lg  rounded-md mx-auto brightness-75">
            <img src={CoomingSoon} alt="" className="w-[400px] rounded-md" />
            <h3 className="text-primary text-xl font-bold mt-4">Project 1</h3>
          </div>
          <div className="p-4 bg-white shadow-lg  rounded-md mx-auto brightness-75">
            <img src={CoomingSoon} alt="" className="w-[400px] rounded-md" />
            <h3 className="text-primary text-xl font-bold mt-4">Project 1</h3>
          </div>
          <div className="p-4 bg-white shadow-lg  rounded-md mx-auto brightness-75">
            <img src={CoomingSoon} alt="" className="w-[400px] rounded-md" />
            <h3 className="text-primary text-xl font-bold mt-4">Project 1</h3>
          </div>
          <div className="p-4 bg-white shadow-lg  rounded-md mx-auto brightness-75">
            <img src={CoomingSoon} alt="" className="w-[400px] rounded-md" />
            <h3 className="text-primary text-xl font-bold mt-4">Project 1</h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
