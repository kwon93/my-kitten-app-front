import React from 'react';
import { IconProps } from '../../../types/IconProps.ts';

const NavItem: React.FC<IconProps> = ({ icon, label }) => {
  const iconPath: string = '/src/assets/' + icon + '.png';

  return (
    <div className="flex flex-col items-center">
      <img src={iconPath} alt="icon" className="w-7" />
      < span className="text-s">{label}</span>
    </div>
  );
};

export default NavItem;
