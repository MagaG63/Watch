import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom"; // ✅ react-router-dom

function NavBar({ user, logoutHandler }) {
  return (
    <div className="navBar">
      <Container className="navBarContainer">
        <div className="adminLogin">
          {!user ? (
            <>
              <NavLink to="/login">Войти как администратор</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/client" className="me-3">Оформить заявку</NavLink>
              
              <NavLink as="button" onClick={logoutHandler}>
                Выход
              </NavLink>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
