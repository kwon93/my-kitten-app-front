import React from 'react';
import NavItem from './NavItem.tsx';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm pb-2">
      <div className="flex justify-between p-2">
        <div className="container mx-auto h-full flex justify-between items-center px-10 max-w-md">
          <Link to={'/'}>
            <NavItem icon="iconHome" label="홈" />
          </Link>
          <NavItem icon="iconGallery" label="갤러리" />
          <NavItem icon="iconCat2" label="고양이 정보" />
          <NavItem icon="iconUser" label="내 정보" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

