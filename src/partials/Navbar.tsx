import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;

  align-items: center;

  justify-content: space-between;


  padding: 1.5rem 2rem;

  background-color: #ffffff;

  border-bottom: 2px solid #f0f0f0;

  width: 100%;

  box-sizing: border-box;
`;

const Logo = styled.div`
  a {
    font-size: 2.2rem;

    font-weight: 900;

    letter-spacing: 1px;

    color: #d97757;

    text-decoration: none;

    font-family: 'Impact', sans-serif;
  }
`;

const NavLinks = styled.ul`
  display: flex;

  list-style: none;

  gap: 2.5rem;

  margin: 0;

  padding: 0;

  li {
    a {
      text-decoration: none;

      color: #2c2c2c;

      font-weight: 500;

      font-size: 0.95rem;

      letter-spacing: 0.5px;

      text-transform: uppercase;

      transition: color 0.2s ease;

      &:hover {
        color: #d97757;
      }
    }
  }
`;

const Basket = styled.div`
  a {

    color: #2c2c2c;

    font-size: 1.5rem;

    display: flex;

    align-items: center;

    text-decoration: none;

    transition: color 0.2s ease;

    &:hover {
      color: #d97757;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">WALLYWOOD</Link>
      </Logo>

      <NavLinks>
        <li><Link to="/">Forside</Link></li>

        <li><Link to="/plakater">Plakater</Link></li>

        <li><Link to="/om-os">Om os</Link></li>

        <li><Link to="/kontakt-os">Kontakt os</Link></li>
        
        <li><Link to="/login">Login</Link></li>
      </NavLinks>

      <Basket>
        <Link to="/kurv" aria-label="Gå til kurv">
          🛒
        </Link>
      </Basket>
    </Nav>
  );
};

export default Navbar;