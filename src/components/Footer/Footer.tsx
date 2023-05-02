import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>R</span>
        <span>C</span>
      </a>
      <div>
        <p>
          Este sitio fue hecho con <img src={reactIcon} alt="React" /> y con mucho 
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/rodrigo-cabrera-673961136/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/Rodrigo-Emca"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/rodrigueroi/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

      </div>
    </Container>
  )
}
