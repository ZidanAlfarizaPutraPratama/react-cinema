import { useState } from "react"
import SidebarContainers from "./SidebarContainers"
import NavbarContainers from "./NavbarContainers";
import PageContainers from "./PageContainers";
import SuspenseContainer from "./SuspenseContainers/SuspenseContainer";
import { useAppSelector } from "../App/hooks";
import { selectLoading } from "../Features/Common/loadingSlice";

const Layout = () => {
  const loading = useAppSelector(selectLoading);

  const [menuToggled, setMenuToggled] = useState(false);
  const changeMenuToggled = () => {
    setMenuToggled((prev) => !prev)
  }
  return (
    <>
      {
        loading.isLoading
          ? <SuspenseContainer />
          : null
      }
      <NavbarContainers changeMenuToggled={() => changeMenuToggled()} />
      <SidebarContainers menuToggled={menuToggled} changeMenuToggled={() => changeMenuToggled()} />
      <PageContainers />
    </>
  )
}

export default Layout