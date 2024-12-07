const Contact = () => {
  return (
    <>
      <main
        className="w-full md:pt-32 pt-28 pb-20 container mx-auto px-6 flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0"
        id="contact"
      >
        <div className="w-full">
          <h1 className="text-white text-left text-3xl font-semibold">
            Lets Work Together
          </h1>
          <p className="text-slate-300 font-lora md:text-xl text-lg mt-6 text-justify">
            I’m open to collaborating on various projects, particularly those
            focusing on UI/UX design, web development, or data analysis. Let’s
            work together to create innovative and impactful digital solutions.
            Feel free to reach out to me via social media or email!
          </p>
        </div>
        <form action="" className="w-full mx-auto">
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className="block w-full rounded-md bg-white px-3 py-3 text-md text-primary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
            />
          </div>
          <div className="mt-4">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="block w-full rounded-md bg-white px-3 py-3 text-md text-primary outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
            />
          </div>
          <button className="mt-4 bg-white text-center text-primary md:w-1/3 w-full rounded-sm py-3 px-12 font-semibold hover:bg-primary hover:text-white hover:shadow-lg hover:border hover:border-1">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
