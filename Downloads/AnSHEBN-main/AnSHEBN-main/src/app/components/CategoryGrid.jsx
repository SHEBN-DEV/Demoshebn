"use client"
import React from 'react';



const categories = [
  { image: '/images/projects/Vector.png', label: 'Education' },
  { image: '/images/projects/Vector-1.png', label: 'Entrepreneurship' },
  { image: '/images/projects/Vector-2.png', label: 'Digital Banking' },
  { image: '/images/projects/Vector-3.png', label: 'Web 3' },
  { image: '/images/projects/Vector-4.png', label: 'Scholarships and Challenges' },
];

const CategoryGrid = () => {
  return (
    <div className="w-5/6 grid grid-cols-2 md:grid-cols-5 gap-4">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-[#1a1718]"
        >
          <div className="bg-black border-2 border-[#ff27d9] p-4 rounded-xl hover:bg-[#ff27d9] transition">
           <img className='w-14 h-12' src={cat.image} alt={cat.label} />
          </div>
          <div className="text-center text-sm font-medium mt-2">{cat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
