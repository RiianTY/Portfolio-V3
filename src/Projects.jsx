import "./App.css";

export default function Projects(data) {
  const buttonGen = data.stack.map((item, index) => {
    return (
      <button key={index} className="stack">
        {item}
      </button>
    );
  });

  return (
    <div className="project">
      <img id="project-img" src={data.image} alt="" />
      <div className="overlay project">
        <div className="description">
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          <div className="stack-btn">
            {buttonGen}
            <div className="button-pos">
              <button className="btn">
                <a href={data.live} target="_blank" rel="noopener noreferrer">
                  Preview
                </a>
              </button>
              <button className="btn">
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
