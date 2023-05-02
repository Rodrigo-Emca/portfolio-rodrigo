import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import youTubeIcon from "../../assets/youtube-icon2.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>Mi Portfolio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <a href="https://mate-ar.vercel.app/home">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Go to MateAr</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a> 
          <div className="project-links">
            <a href="https://github.com/Rodrigo-Emca/matear-front" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://mate-ar.vercel.app/home" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
          </div>
          </header>
          <div className="body">
            <h3>MateAr</h3>
            <p>Una aplicación web e-Commerce creada para un emprendimiento local. <a href="https://mate-ar.vercel.app/home"> MateAr</a> permite registrarse e iniciar sesión para comprar y pagar con MercadoPago.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://minga-nine.vercel.app/">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Go to Minga</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a> 
            <div className="project-links">
              <a href="https://github.com/Rodrigo-Emca/Minga" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://minga-nine.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Minga</h3>
              <p>Una website para leer mangas. Pueden registrarse usuarios (para lectura) y editoriales (para publicar, editar y eliminar sus mangas). Incorpora MercadoPago para realizar donaciones.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://rodrigo-emca.github.io/Happy-Tails---Petshop/index.html">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Go to Happy Tails PetShops</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a> 
            <div className="project-links">
              <a href="https://github.com/Rodrigo-Emca/Happy-Tails---Petshop" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://rodrigo-emca.github.io/Happy-Tails---Petshop/index.html" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Happy Tails</h3>
              <p>Un PetShop creado para un challenge de 72hs, realizada en forma cooperativa. Contiene un filtro por texto y un Shop para agregar/quitar productos.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="https://www.youtube.com/watch?v=_kAQABpZApk">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Watch MateAr on You</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a> 
            <div className="project-links">
              <a href="https://www.youtube.com/watch?v=_kAQABpZApk" target="_blank" rel="noreferrer">
                <img src={youTubeIcon} alt="Visitar site" />
              </a>
              <a href="https://github.com/Rodrigo-Emca/matear_mobile" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>MateAr Mobile</h3>
              <p>App Mobile de MateAr (e-Commerce) creada con React Native. Permite al usuario registrarse, iniciar sesión, ver productos, sumarlos a un shop y finalizar su compra, usando MercadoPago.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <a href="">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a> 
            <div className="project-links">
              <a href="https://github.com/Rodrigo-Emca/matear_mobile" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Minga Mobile</h3>
              <p>App Mobile de Minga construida con React Native. El usuario puede iniciar sesión para leer mangas y comics.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://rodrigo-emca.github.io/amazing_events/index.html">
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Go to Amazing Events</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </a> 
            <div className="project-links">
              <a href="https://github.com/Rodrigo-Emca/amazing_events" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://rodrigo-emca.github.io/amazing_events/index.html" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Amazing Events</h3>
              <p>Una website que consume una API para obtener diferentes eventos. Contiene filtros por categorias y texto. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}