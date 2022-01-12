import "../Style.scss"
import Header from "./Header/index";
import {useState} from "react"


import { Navbar } from 'react-bootstrap';




export default function NavBar() {

  const [scrollBlack, setScrollBlack] = useState("")

   const navbar = document.querySelector('.navbarColor');
     window.onscroll = () => {
     if (window.scrollY > 100) {
       setScrollBlack('bg-dark')
        // navbar.classList.add('bg-dark');
   } else {
        setScrollBlack('');
    }
  };
  return (
    
    
    <section className="navbar_size">
        <div className="container">
          <Navbar className={"h-20 px-lg-2 navbarColor navbar-dark " + scrollBlack} variant="dark" fixed ="top" expand="lg" >
          <Navbar.Brand className="head-title lead text-primary fw-bolder">
             <span >RENAUD</span>
             
          </Navbar.Brand>
          <Navbar.Toggle />
          <Header />
        </Navbar>
        </div>
      </section>  
      
   )
}