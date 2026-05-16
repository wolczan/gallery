import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import galeria from '../galeria.png';
import { useAuth } from "../utils/AuthProvider.jsx";
import './MainNavbar.css';

const MainNavbar = ({ setShowLogin }) => {
  const { user, signOut } = useAuth();
  console.log("USER Z AUTH W MAINNAVBAR:", user);
  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      className="navbar-custom fixed-top"
      data-bs-theme="dark"
    >
      <Container className="align-items-center">
        {/* Logo + nazwa */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center brand-custom"
        >
              <img
        src={galeria}
        width="28"
        height="34"
        className="d-inline-block"
        alt="Gallery logo"
         />

          <span className="ms-2 brand-text">Galeria</span>
        </Navbar.Brand>

        {/* SearchBar – na desktopie po środku */}
        <div className="d-none d-lg-block flex-grow-1 mx-3">
          <SearchBar />
        </div>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
           {/* Linki główne – dopasowane do Routes */}
<Nav.Link
  as={NavLink}
  to="/"
  end
  className={({ isActive }) =>
    "nav-link-custom" + (isActive ? " active" : "")
  }
>
  Start
</Nav.Link>

<Nav.Link
  as={NavLink}
  to="/about"
  className={({ isActive }) =>
    "nav-link-custom" + (isActive ? " active" : "")
  }
>
  O mnie
</Nav.Link>

<Nav.Link
  as={NavLink}
  to="/plakaty"
  className={({ isActive }) =>
    "nav-link-custom" + (isActive ? " active" : "")
  }
>
  Plakaty
</Nav.Link>

<Nav.Link
  as={NavLink}
  to="/fotografia"
  className={({ isActive }) =>
    "nav-link-custom" + (isActive ? " active" : "")
  }
>
  Fotografia
</Nav.Link>

<Nav.Link
  as={NavLink}
  to="/blog"
  className={({ isActive }) =>
    "nav-link-custom" + (isActive ? " active" : "")
  }
>
  Blog
</Nav.Link>

<Nav.Link
  as={NavLink}
  to="/dostawa"
  className={({ isActive }) =>
    "nav-link-custom" + (isActive ? " active" : "")
  }
>
  Dostawa
</Nav.Link>

{/* SearchBar na mobile – wewnątrz rozwijanego menu */}
<div className="d-lg-none w-100 my-2">
  <SearchBar />
</div>

{/* Przyciski logowania */}
{user ? (
 <div className="d-flex align-items-center justify-content-center ms-lg-3 user-status">
  <div className="online-dot"></div>

  <span className="user-email">
    {user.email?.split("@")[0]}
  </span>

  <button
    onClick={signOut}
    className="logout-btn"
  >
    Wyloguj
  </button>
</div>
) : (
  <Nav.Link
    onClick={() => setShowLogin(true)}
    className="nav-link-custom btn-custom ms-lg-3"
  >
    Zaloguj się
  </Nav.Link>
)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
