import React from 'react';
import Button from '../common/ui/Button.tsx';
import Logo from '../common/ui/Logo.tsx';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <Link to="/signup">
          <Button />
        </Link>
      </div>
    </header>
  );
};

export default Header;