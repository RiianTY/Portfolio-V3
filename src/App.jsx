import projectData from "./data.js";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  const mappedData = projectData.map((data) => {
    return (
      <Projects
        key={data.id}
        title={data.title}
        image={data.image}
        description={data.description}
        live={data.live}
        github={data.github}
        stack={data.stack}
      />
    );
  });

  return (
    <main className="right-container">
      <About />
      {/* projects element from line 10 */}
      <h2 id="projects-title">Projects</h2>
      {mappedData}
      <Footer />
    </main>
  );
}
