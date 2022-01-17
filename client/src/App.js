import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import Greeting from "./components/Greeting/Greeting";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import NavBar from "./components/Navigation/Partials/navBar";
import Register from "./pages/Register/Register";
import MessageBox from "./pages/Messages/Messages";


//import Profile from "./pages/Profile";
import LogHome from "./pages/LogHome/LogHome";
import FeedBack from "./components/Email/FeedBack";
import MyResume from "./pages/MyResume/MyResume";
import MyLebenslauf from "./pages/MyResume/MyLebenslauf";
import { ContactUs } from "./components/Email/ContactUs";
import Footer from "./components/Footer/Footer";
import HeaderImg from "./components/HeaderImg/HeaderImg";
import IconsNavbar from "./components/Navigation/IconsNavbar/IconsNavbar";


export const AppContext = createContext({
  username: "",
  loggedIn: false,
  handleLogin: () => {},
});

function App() {
  const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
    username: "",
    loggedIn: false,
  };

  const [username, setUsername] = useState(loginSession["username"]);
  const [loggedIn, setLoggedIn] = useState(loginSession["loggedIn"]);

  const handleLogin = (_username) => {
    if (_username) {
      setUsername(_username);
      setLoggedIn(true);
    } else {
      setUsername("");
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    sessionStorage.setItem(
      "login",
      JSON.stringify({ username: username, loggedIn: loggedIn })
    );
  }, [username, loggedIn]);

  return (
    <AppContext.Provider value={{ username, loggedIn, handleLogin }}>
      <div className="App">
        
        <BrowserRouter>
          <HeaderImg />
          <NavBar loggedIn={loggedIn} />
          <IconsNavbar />
          
          {/* <Navigation /> */}
          {/* {loggedIn ? <Greeting /> : null} */}
          <Routes>
            <Route path="/" element={<Greeting />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/loghome" element={<ProtectedRoute auth={loggedIn}><LogHome /></ProtectedRoute>} />
            <Route path="/messages" element={<ProtectedRoute auth={loggedIn}><MessageBox /></ProtectedRoute>} />
            <Route path="/feedback" element={<ProtectedRoute auth={loggedIn}><FeedBack /></ProtectedRoute>} />
            <Route path="/myresume" element={<ProtectedRoute auth={loggedIn}><MyResume /></ProtectedRoute>} />
            <Route path="/mylebenslauf" element={<ProtectedRoute auth={loggedIn}><MyLebenslauf /></ProtectedRoute>} />
            <Route path="/email" element={<ProtectedRoute auth={loggedIn}><ContactUs/></ProtectedRoute>} />
          </Routes>
          <Footer />
        </BrowserRouter>
        
        
      </div>
      
    </AppContext.Provider>
  );
}

export default App;
