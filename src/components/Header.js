import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">UNIGRANDE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Visualizar Escolas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Cadastrar Escola</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Avaliar Escola</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Sistemas para Internet | By Tharles Amaro</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;