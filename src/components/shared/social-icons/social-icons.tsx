import "./social-icons.css";

export const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/iesous/" className="linkedin">
        <img src="linkedin.svg" alt="Linkedin icon" title="Linkedin" className="icon" />
      </a>
      <a href="https://www.instagram.com/iesous.b/" className="instagram">
      <img src="instagram.svg" alt="Instagram icon" title="Instagram" className="icon" />
      </a>
      <a href="https://github.com/iesous99" className="github">
      <img src="github.svg" alt="GitHub icon" title="GitHub" className="icon" />
      </a>
      <a href="mailto:yesouh99@gmail.com" className="gmail">
      <img src="gmail.svg" alt="Gamil icon" title="Gmail" className="icon" />
      </a>
      <a href="https://wa.me/584129963289?text=Hola,%20vengo%20de%20tu%20website" className="whatsapp">
      <img src="whatsapp.svg" alt="WhatsApp icon" title="WhatsApp" className="icon" />
      </a>
    </div>
  );
}