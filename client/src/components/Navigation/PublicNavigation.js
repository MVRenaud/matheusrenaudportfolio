
import { Nav } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'

export default function PublicNavigation() {
  return (
    <>
        <LinkContainer className="mx-3 fs-2 active" aria-current="true" to ="/" >
              <Nav.Link > Home</Nav.Link> 
        </LinkContainer>
        <LinkContainer className="mx-3 fs-4 active" aria-current="true" to ="/login"   >
          <Nav.Link   > Login</Nav.Link>           
        </LinkContainer>
        <LinkContainer className="mx-3 fs-4 active" aria-current="true" to ="/register"   >
          <Nav.Link   >Sign up</Nav.Link>           
        </LinkContainer>
    </>
  );
}