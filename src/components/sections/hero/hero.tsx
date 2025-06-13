import "./hero.css";
import iesousLogoJpeg from "../../../assets/li-Logo.jpeg";

export const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__logo">
        <img src={iesousLogoJpeg} alt="personal-logo like studio ghibli" />
      </div>
      <div className="hero__content">
        <h2 className="hero__title">Técnico Informático y Desarrollador Web Front-end</h2>
        <div className="hero__icons">
          <img src="react-logo.svg" alt="react logo" title="React" />
          <img src="js-logo.svg" alt="react logo" title="JavaScript" />
          <img src="css-logo.svg" alt="react logo" title="CSS" />
          <img src="html-logo.svg" alt="react logo" title="HTML" />
        </div>
        <h3 className="hero__slogan">Disponible para cualquier reto</h3>
      </div>
    </main>
  );
}