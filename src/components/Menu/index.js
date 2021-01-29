import React from 'react';
import Logo from '../../assets/logo.png';
import Button from './components/Button';
import './Menu.css'

function Menu() {
  return (
    <nav className='Menu'>
      <a href="/">
        <img className="Logo" src={Logo} alt="VMSFlix Logo" />
      </a>

      <Button as='a' className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;