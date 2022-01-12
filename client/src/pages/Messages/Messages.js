import axios from "../../util/axiosInstance";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import FormWrapper from '../../components/Common/Wrapper/Wrapper';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';

export default function MessageBox(){

    const navigate = useNavigate();
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = async (event) => {
        
        event.preventDefault();
        console.log("Submit the form");
        const formData = new FormData(event.target);

        const data = {
          name:formData.get("name"),//get the data from the input with name title
          email:formData.get("email"),//get the data from the input with name message
          text:formData.get("message")
        };

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
    }

    // const readMessage = async() => {
    //     try {
    //         //making a get request to fetch the profile information
    //         const response = await axios.get("http://localhost:3001/api/users/read");
            
    //         if(response.status === 200){
    //             setMessage(response.data.message);
    //         }
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     readMessage()
    // }, [])

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
        <h3>Leave a Message</h3>
              <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name"  className="form-control" placeholder="Name" />
              </div>
  
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" name="email"  className="form-control" placeholder="Enter email" />
              </div>
  
              <div className="form-group">
                  <label>Message</label>
                  <input type="text"  name="message"  className="form-control" placeholder="Message" />
              </div>
              <div>
                   {message!= null ?
                  <>
                    <h1>{message}</h1>
                  </>
                    :
                    <p>Please type your message</p>}
              </div>
  
              

              <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
              <button className="btn btn-primary btn-block">Send</button>
              <p className="forgot-password text-right">
                  Already registered <Link to="/login">sign in?</Link>
              </p>
  
        </form>
       
        
        </FormWrapper>
    )
}