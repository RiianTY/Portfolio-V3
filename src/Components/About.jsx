export default function About() {
  return (
    <section className="z-30 h-[100vh] about-section">
      <div
        id="about-me"
        className="container flex flex-col h-full items-center justify-center"
      >
        <div className="hero mb-15 z-30">
          <h1 className=" hero-title">About Me</h1>
          <span className="hero-line"></span>
        </div>
        <div className="about-content flex flex-col items-center justify-center max-w-3xl text-left px-5 text-slate-300">
          <p className="md:text-2xl sm:text-xl text-lg mb-4">
            Hello, I've been coding for 4+ years on and off but kept getting
            drawn back to it, I've started to take it seriously. who’s been
            learning to code in my spare time, using platforms such as&nbsp;
            <a target="_blank" href="https://scrimba.com">
              {`Scrimba`}
            </a>
            ,
            <a target="_blank" href="https://www.codecademy.com">
              {` Codecademy `}
            </a>
            and
            <a target="_blank" href="https://www.udemy.com">
              {` Udemy `}
            </a>
            {" to build my skills. "}
          </p>
          <p className="md:text-2xl sm:text-xl text-lg">
            I recently discovered how much I enjoy creating things to the point
            where i take time off my current job to code, with my current focus
            being front-end development. This newfound enthusiasm has driven me
            to pursue a full-time career in software development. Looking ahead,
            I’m eager to expand into full-stack development while continuously
            improving my abilities and deepening my understanding of programming
            languages to deliver impactful creations.
          </p>
        </div>
      </div>
    </section>
  );
}
