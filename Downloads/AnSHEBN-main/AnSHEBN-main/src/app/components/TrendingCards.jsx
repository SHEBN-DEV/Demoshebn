"use client"
// src/components/TrendingCards.jsx
import React from 'react';
import { useRouter } from 'next/navigation';

const cards = [
  {
    id: 1,
    category: 'Education',
    image: '/images/projects/equipo.jpg',
    title: 'First all-female team leading Blockchain in Rio',
    funded: 15000,
    goal: 25000,
    daysLeft: 15,
  },
  {
    id: 2,
    category: 'Entrepreneurship',
    image: '/images/projects/equipo.jpg',
    title: 'Women Shining in UX with Blockchain',
    funded: 18750,
    goal: 25000,
    daysLeft: 13,
  },
  {
    id: 3,
    category: 'Scholarships and Challenges',
    image: '/images/projects/equipo.jpg',
    title: 'Fundraising pitches for women',
    funded: 6750,
    goal: 15000,
    daysLeft: 19,
  },
];

const TrendingCards = () => {
  const router = useRouter();

  const handleCardClick = (cardId) => {
    router.push(`/Projects/${cardId}`);
  };

  return (
    <div className="flex flex-col p-6">
      
      <a href='#' className="w-5/6 flex justify-end text-gray-500 text-lg font-semibold hover:text-[#FF29D7]">More</a>
      <div className='flex'>
        {/* Card */}
        <div className="w-5/6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-black rounded-lg p-4 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
              onClick={() => handleCardClick(card.id)}
            >
              <p className="text-sm text-gray-500 font-semibold">{card.category}</p>
              <div className='flex items-center justify-center py-6 px-2'>
                <img className='w-xs size-45 rounded-xl' src={card.image} alt={card.title} />
              </div>
              <p className="text-base font-bold mt-2">{card.title}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  ${card.funded.toLocaleString()} of ${card.goal.toLocaleString()} funded
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div
                    className="bg-[#FF29D7] h-2.5 rounded-full"
                    style={{ width: `${(card.funded / card.goal) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{card.daysLeft} days left</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next-icon */}
        <div className="w-1/6 flex items-center justify-center">
          <svg className="size-6 fill-[#ff29d7] cursor-pointer hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TrendingCards;
