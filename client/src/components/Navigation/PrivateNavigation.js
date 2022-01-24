
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'


export default function PrivateNavigation() {
  return (
    <>
        
        {/* <LinkContainer className="mx-3 fs-2 text-primary" to ="/loghome"  >
          <Nav.Link >Home</Nav.Link>           
        </LinkContainer> */}
        <LinkContainer className="mx-3 fs-3 text-primary" to ="/myresume"   >
          <Nav.Link >MyResume</Nav.Link>           
        </LinkContainer>
        <LinkContainer className="mx-3 fs-3 text-primary" to ="/email"   >
          <Nav.Link >Email</Nav.Link>           
        </LinkContainer>
        <LinkContainer className="mx-3 fs-4 text-primary" to ="/logout"   >
          <Nav.Link   >Logout</Nav.Link>           
        </LinkContainer>
    </>
  );
}
