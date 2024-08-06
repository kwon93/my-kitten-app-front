import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="text-2xl font-bold text-gray-800">
      My Kitten
      <img src="/src/assets/iconCat.png" className="h-9 w-7 inline pb-2 ml-1" />
    </div>
  )
    ;
};

export default Logo;