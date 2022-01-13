import "../../Style.scss";
import { useContext } from "react";
import { AppContext } from "../../../../App";
import { Link } from 'react-router-dom';
import { Nav , Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'
import { PublicNavigation, PrivateNavigation } from '../../../Navigation';


export default function Header() {
  const { loggedIn } = useContext(AppContext);
  return (

         <Navbar.Collapse className="collapse justify-content-lg-end">
           <Nav className="align-items-center">
           <NavItem className="mx-3 fs-3 text-primary"  >
              <Nav.Link href='#footer'>Contact</Nav.Link>           
            </NavItem>
            <LinkContainer className="mx-3 fs-2 text-primary" to ="/" >
              <Nav.Link ></Nav.Link>           
            </LinkContainer>{loggedIn ? <PrivateNavigation /> : <PublicNavigation />}
           </Nav>
          </Navbar.Collapse>
   )
}