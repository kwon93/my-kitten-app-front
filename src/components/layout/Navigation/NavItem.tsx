import React from 'react';
import { IconProps } from '../../../types/IconProps.ts';


const NavItem: React.FC<IconProps> = ({ icon, label }) => {

  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default NavItem;
