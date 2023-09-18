import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Navbar } from "react-bootstrap"

type iNavbarContainers = {
  changeMenuToggled(): void;
}

const NavbarContainers = ({ changeMenuToggled }: iNavbarContainers) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <button onClick={() => changeMenuToggled()} className="btn btn-light m-2">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <span className="m-2">Logo Text</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavbarContainers