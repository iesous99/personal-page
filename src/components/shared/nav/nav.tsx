import "./nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <h2 className="nav__title">Iesous Blanco</h2>
      <div className="nav__items">
        <a href="#projects">Proyectos</a>
        <a href="#about">Sobre mi</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  )
}
