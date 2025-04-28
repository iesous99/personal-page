import "./projects.css";

export const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects__title">
        Proyectos
      </h1>
      <div className="projects__content">
        <div className="project__one">
          <h2 className="project__title"><a href="#">Proyecto 1</a></h2>
          <p className="project__description">descrepcion del proyecto 1</p>
        </div>
        <div className="project__two">
          <h2 className="project__title"><a href="#">Proyecto 2</a></h2>
          <p className="project__description">descrepcion del proyecto 2</p>
        </div>
        <div className="project__three">
          <h2 className="project__title"><a href="#">Proyecto 3</a></h2>
          <p className="project__description">descrepcion del proyecto 3</p>
        </div>
      </div>
    </section>
  );
}