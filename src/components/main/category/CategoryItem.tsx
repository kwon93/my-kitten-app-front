import React from 'react';
import { IconProps } from '../../../types/IconProps.ts';


const CategoryItem: React.FC<IconProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center p-2"> {/* p-2 추가 */}
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2"> {/* w-16, h-16으로 수정 */}
        <span className="text-3xl">{icon}</span> {/* text-3xl로 수정 */}
      </div>
      <span className="text-xs text-center">{label}</span>
    </div>
  );;
};

export default CategoryItem;