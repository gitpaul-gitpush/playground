import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Button } from '../../atoms/Button';

export const Header: React.FC = () => {
  return (
    <header className="app-header-fixed">
      <div className="header-content">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Logo</h1>
          </Link>
        </div>
        <nav className="navigation">
          <Link to="/login">
            <Button variant="outline" size="small">Login</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};