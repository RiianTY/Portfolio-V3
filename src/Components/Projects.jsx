import "../App.css";

export default function Projects(data) {
  const stack = data.stack.map((item, index) => {
    return (
      <span key={index} className="stack">
        {item}
      </span>
    );
  });

  return (
    <div className="project grid grid-cols-1 md:grid-cols-2 items-center justify-center max-w-1xl box-border relative transition-colors duration-300 bg-transparent max-w-[800px] mb-25">
      <div className="flex justify-center mb-5 sm:mb-5 md:z-0">
        <img
          src={data.image}
          alt="Halcyon Theme Screenshot"
          className="project-img max-w-full min-w-[350px] h-auto rounded-sm opacity-90 transition-transform duration-400 ease-in-out"
        />
      </div>
      <div className="flex flex-col justify-center max-h-[300px] relative z-20 md:items-end md:text-right sm:text-left sm:items-start">
        <h1 className=" data text-slate-100 text-[1.6rem] font-semibold md:mb-4 sm:mt-4 sm:mb-1">
          {data.title}
        </h1>
        <div className="desc-box md:bg-[#003030] text-[#b8c7d9] rounded-sm md:px-6 py-5 md:min-w-[450px] md:max-w-[500px] md:mb-3 md:mt-3 sm:mb-1 relative z-30 transition-all duration-500 ease-in-out text-[.9rem] md:text-right sm:text-left sm">
          {data.description}
        </div>
        <div className="data text-[#b8c7d9] text-[.8rem] tracking-wide mt-2 flex gap-3 md:text-right">
          {stack}
        </div>
        <div className="data flex gap-3 items-center mt-4 md:justify-end w-full">
          <a href={data.github} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 inline-block opacity-80 hover:opacity-100 transition-opacity duration-200 text-[#b8c7d9] hover:text-[#ffff] hover:scale-110"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href={data.live} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 inline-block opacity-80 hover:opacity-100 transition-opacity duration-200 text-[#b8c7d9] hover:text-[#ffff] hover:scale-110 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 7L7 17M17 7h-6m6 0v6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
