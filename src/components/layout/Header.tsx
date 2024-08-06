import React from 'react';
import Logo from './header/Logo.tsx';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button.tsx';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <Link to="/signup">
          <Button variant="ghost">회원가입</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;