import axios from "../../util/axiosInstance";
import { useState } from "react";
import "./Style.scss"

import { Link, useNavigate } from "react-router-dom";

import FormWrapper from '../../components/Common/Wrapper/Wrapper';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';

export default function Register(){

    const navigate = useNavigate();
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submit the form");
        const formData = new FormData(event.target);

        const data = {
          firstname:formData.get("firstname"),//get the data from the input with name firstname
          lastname:formData.get("lastname"),//get the data from the input with name lastname
          username:formData.get('username'),//get the data from the input with name username
          email: formData.get("email"),//...
          password: formData.get("password"),
        };

        try {
           const response = await axios.post("/api/users/register", data); 
           
           if(response.status === 200){
               //everything went well! 
               console.log("user was created");
               navigate("/login");
           }

        } catch (error) {
            console.log(error);
            setIsError(true);
            setErrorMessage(error.response.data.message);
        }
    }


    return (
        <div className="registerClass">
            <FormWrapper>
                <form onSubmit={handleSubmit} id="signup">
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">First name</label>
                        <input type="text" name="firstname"  className="form-control" placeholder="First name" />
                    </div>
  
                    <div className="mb-3">
                        <label  className="form-label">Last name</label>
                        <input type="text" name="lastname"   className="form-control" placeholder="Last name" />
                    </div>
  
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text"  name="username"  className="form-control" placeholder="Username" />
                    </div>
  
                    <div className="mb-3">
                        <label for="exampleInputEmail2" className="form-label">Email address</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    
  
                    <div className="mb-3">
                        <label for="exampleInputPassword2" class="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword2" placeholder="Enter password" />
                    </div>
  
                    {/* <div className="mp-3">
                        <label for="exampleInputPassword2" className="form-label" >Re-Password</label>
                        <input type="password" name="repassword" className="form-control" placeholder="Enter password" />
                    </div> */}
                    <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
                    <button type="submit" class="btn btn-primary mt-3">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login">sign in?</Link>
                    </p>
  
                </form>
            </FormWrapper>
        </div>
        
    )
}