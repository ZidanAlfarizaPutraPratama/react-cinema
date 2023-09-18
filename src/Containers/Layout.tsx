import { useState } from "react"
import SidebarContainers from "./SidebarContainers"
import NavbarContainers from "./NavbarContainers";
import PageContainers from "./PageContainers";

const Layout = () => {
  const [menuToggled, setMenuToggled] = useState(false);
  const changeMenuToggled = () => {
    setMenuToggled((prev) => !prev)
  }
  return (
    <>
      <NavbarContainers changeMenuToggled={() => changeMenuToggled()} />
      <SidebarContainers menuToggled={menuToggled} changeMenuToggled={() => changeMenuToggled()} />
      <PageContainers />
    </>
  )
}

export default Layout