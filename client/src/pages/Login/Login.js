import axios from "../../util/axiosInstance";
import "./Style.scss"
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

import FormWrapper from '../../components/Common/Wrapper/Wrapper'
import ErrorMessage from "../../components/Common/ErrorMessage/ErrorMessage";

export default function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AppContext);

    const[isError, setIsError] = useState(false)
  const[errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post("/api/users/login", data);

      handleLogin(response.data.user.username);

      // redirect
      navigate("/loghome");
    } catch (error) {
      console.log(error);
       setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="loginClass">
      <FormWrapper>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
          </label>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
          Password
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" required={true} />
          </label>
          </div>
          <ErrorMessage isVisible= {isError} errorMessage={errorMessage} />
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    
      </FormWrapper>
      
    </div> 
  );
}
