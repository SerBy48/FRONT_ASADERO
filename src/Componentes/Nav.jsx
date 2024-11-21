import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';
import pollo from '../Img/pollo1.jpg';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (window.innerWidth < 769) {
      setClicked(!clicked);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setClicked(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <NavContainer>
        <div className='Logo'>
          <img src={pollo} alt="Icono Asadero" />
          <h2>Asadero <br /> <span>El Gallito</span></h2>
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Inicio</a>
          <a onClick={handleClick} href="/productos">Productos</a>
          <a onClick={handleClick} href="/reseñas">Reseñas</a>
          <a onClick={handleClick} href="/reservas">Reservas</a>
          <a onClick={handleClick} href="/Api">Juega para ganar!</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}>
        <a onClick={handleClick} href="/">Inicio</a>
          <a onClick={handleClick} href="/productos">Productos</a>
          <a onClick={handleClick} href="/reseñas">Reseñas</a>
          <a onClick={handleClick} href="/reservas">Reservas</a>
          <a onClick={handleClick} href="/Api">Juega para ganar!</a>
        </BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  width: 100%;
  background-color: rgb(125,17,17);
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  div:first-child {
    padding: 5px;
    display: flex;
    align-items: center;
    z-index: 12;

    img {
      width: 64px;
      height: 64px;
      border-radius: 40%;
      border: 2px solid #ffc100;
      margin-right: 1em;
      z-index: 2;
    }

    h2 {
      color: white;
      font-size: 1.5em;
      margin: 0;
      display: flex;
      flex-direction: column;

      span {
        color: #ffcf33;
        font-size: 1.2em;
      }
    }
  }

  .links {
    display: flex;
    gap: 1.5em;

    a {
      color: white;
      text-decoration: none;
      position: relative;
      padding: 0px 20px;
      margin:0px 10px;
      padding-bottom: 5px;
      transition: color 0.3s ease;

      &:hover {
        color: #ffcf33;
      }

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        left: 0;
        bottom: 0;
        background-color: #ffcf33;
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  .burguer {
    display: none;
  }

  @media (max-width: 768px) {
    .burguer {
      display: block;
    }
    .links {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #C40C0C;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  display: flex; /* Usar flexbox */
  flex-direction: column; /* Apilar verticalmente */
  justify-content: center; /* Centrar verticalmente */
  align-items: center; /* Centrar horizontalmente */

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    a {
      color: white;
      text-decoration: none;
      position: relative;
      padding: 10px; /* Ajusta el padding según sea necesario */
      transition: color 0.3s ease;

      &:hover {
        color: #ffcf33;
      }

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        left: 0;
        bottom: 0;
        background-color: #ffcf33;
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;
