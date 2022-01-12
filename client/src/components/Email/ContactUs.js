import React, { useRef, useState} from 'react';
import './Style.scss'
import emailjs from '@emailjs/browser';
import env from 'react-dotenv';import { Link, useNavigate } from "react-router-dom";
import axios from "../../util/axiosInstance";
import FormWrapper from '../../components/Common/Wrapper/Wrapper';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';



export const ContactUs = () => {
  const form = useRef();
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    //sendEmail function submit 2 functions. It Send the message to Gmail & Save at MongoDB the Data Base
  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(env.SERVICE);
    console.log("Submit the form");

    //formData for Data Base
    const formData = new FormData(e.target)

    const data = {
          name:formData.get("name"),//get the data from the input with name title
          email:formData.get("email"),//get the data from the input with name message
          text:formData.get("message")
        };
      //Send message to Gmail
        try {
          emailjs.sendForm(env.SERVICE, env.TEMPLATE, form.current, env.GMAILUSER)
                  .then((result) => {
                      
                        console.log(result.text);
                      
                      
                  }, (error) => {
                      console.log(error.text);
                  });
        } catch (error) {
          console.log("Did not send message",error);
            setIsError(true);
            setErrorMessage(error.response.data.message);
        }

        //Creating and saving formData in Database
        try {
           const response = await axios.post("http://localhost:3001/api/users/send", data); 
           
           if(response.status === 200){
               //everything went well! 
               console.log("message was created");
                navigate("/feedback");
           }
            


        } catch (error) {
            console.log("Did not create message",error);
            setIsError(true);
            setErrorMessage(error.response.data.message);
        }

    
  };

  

  return (
    <div className="emailClass">
      <FormWrapper>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Leave a Message</h3>
            <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name"  className="form-control" placeholder="Name" />
              </div>
  
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" name="email"  className="form-control h-100" placeholder="Enter email" />
              </div>
  
              <div className="form-group">
                  <label>Message</label>
                  <input type="text"  name="message"  className="form-control" placeholder="Message" />
              </div>
              <input type="submit" value="Send" /> 

              <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
              
        </form>
      </FormWrapper>
    </div>
    
  );
};