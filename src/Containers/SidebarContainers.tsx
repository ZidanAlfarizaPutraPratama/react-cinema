import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
} from 'react-pro-sidebar';

type iSidebarContainers = {
  menuToggled: boolean;
  changeMenuToggled(): void;
}

const SidebarContainers = ({menuToggled, changeMenuToggled}: iSidebarContainers) => {
  return (
    <Sidebar
     onBackdropClick={() => changeMenuToggled()}
     toggled={menuToggled}
     breakPoint='all'
     rootStyles={{
      background: "white",
      opacity: 1
     }}
     >
      <Menu>
        <MenuItem href='dashboard'>Dashboard</MenuItem>
        <SubMenu label="Data Master">
          <MenuItem href='genres'>Genres</MenuItem>
          <MenuItem href='movies'>Movies</MenuItem>
          <MenuItem href='rooms'>Rooms</MenuItem>
        </SubMenu>
        <SubMenu label="Sub Menu Example">
          <MenuItem>Sub Menu 1</MenuItem>
          <MenuItem>Sub Menu 2</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  )
}

export default SidebarContainers;