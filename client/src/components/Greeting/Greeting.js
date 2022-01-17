import { useContext } from "react";
import "./Style.scss"
import { AppContext } from "../../App";
import FormWrapper from '../Common/Wrapper/Wrapper'
import Weather from "./Weather";
// import Weather from "./Weather";

export default function Greeting() {
  const { username } = useContext(AppContext);

  return (
    <div className="greetingClass">

      
      <Weather />
      <div className="messageClass">
          <FormWrapper>
        
            <h1>Welcome!</h1>
            <br/>
            <h3>Register on my website, and then login, to see my Portfolio and my CV resume. </h3>
            <br/>
            <h3>
              Come and get to know me better, let me show you what I'm capable of.
            </h3>
        
        
        
          </FormWrapper>
      </div>
    </div>
  );
}
