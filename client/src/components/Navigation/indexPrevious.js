import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { Nav , Navbar } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap'

export default function Navigation() {
  const { loggedIn } = useContext(AppContext);

  return (
    <ul>
      {loggedIn ? (
        <li>
          <Link to="/logout">Logout</Link>
          <li>
            <Link to="/loghome">Home</Link>
          </li>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </ul>
  );
}
