import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>¡Contáctate conmigo!</h2>
        <p>Si te ha interesado mi perfil y te gustaría conversar conmigo, no dudes en enviarme un mensaje.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:contactorodrigocabrera@gmail.com">contactorodrigocabrera@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+541124035275">(+54) 11 2403-5275</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}