import React from 'react';
import CategoryItem from './CategoryItem.tsx';
import { IconProps } from '../../../types/IconProps.ts';


const categories = [
  { icon: '🐾', label: '건강검진' },
  { icon: '🍽️', label: '식단관리' },
  { icon: '💊', label: '약 복용' },
  { icon: '🧼', label: '그루밍' },
  { icon: '🏥', label: '병원찾기' },
  { icon: '📅', label: '일정관리' },
  { icon: '📷', label: '사진첩' },
  { icon: '❓', label: 'QnA' },
];

const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-2 my-4">
      {categories.map((category: IconProps, index) => (
        <CategoryItem key={index} icon={category.icon} label={category.label} />
      ))}
    </div>
  );
};

export default CategoryGrid;