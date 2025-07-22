import React from 'react';
import { Link } from 'react-router-dom';
import '/src/Styles/Header.css';

const Header: React.FC = () => {

  return (
    <>
      <header className="header">
        <nav className="nav-menu">
          <Link to="/" className="nav-logo">
            ПИХЪ
          </Link>
          <div className="nav-links">
            <Link to="/catalog" className="nav-item">
              Каталог
            </Link>
            <Link to="/cart" className="nav-item">
              Корзина
            </Link>
            <Link to="/order" className="nav-item">
              Заказы
            </Link>
            <Link to="/profile" className="nav-item">
              Профиль
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;