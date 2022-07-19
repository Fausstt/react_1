import React from 'react';
import './Header.scss';
import logo from './logo.png'

const Header= () => (
  <header>
    <div className="container">

      <a className='container__img'>
        <img src={logo} alt='фото'/>
      </a>

      <div className="container__nav">

        <a href="" className="container__nav__nav_linc">Apple</a>
        <a href="" className="container__nav__nav_linc">Samsung</a>
        <a href="" className="container__nav__nav_linc">Смарфоны и телефоны  </a>
        <a href="" className="container__nav__nav_linc">Ноутбуки и компьютеры</a>
        <a href="" className="container__nav__nav_linc">Гаджеты</a>
        <a href="" className="container__nav__nav_linc">Планшеты</a>
        <a href="" className="container__nav__nav_linc">ФОТО</a>
        <a href="" className="container__nav__nav_linc">ВИДЕО</a>

      </div>

    </div>
  </header>

);

export default Header;