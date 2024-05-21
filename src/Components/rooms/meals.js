import React from 'react';

export const MealsGrid = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">MEALS</h1>
      <div className="flex justify-center mb-6">
        <div className="border-2 border-blue-500 p-2">
          <img src="src/rooms/pexels-enginakyurt-1579253.jpg" alt="Main" className="w-64 h-auto" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <img src="./rooms/pexels-enginakyurt-1579253.jpg" alt="Thumbnail 1" className="border-2 border-blue-500 p-2" />
        <img src="./src/Components/images/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg" alt="Thumbnail 2" className="border-2 border-blue-500 p-2" />
        <img src="./rooms/pexels-enginakyurt-1579253.jpg" alt="Thumbnail 3" className="border-2 border-blue-500 p-2" />
        <img src="/rooms/pexels-enginakyurt-1579253.jpg" alt="Thumbnail 4" className="border-2 border-blue-500 p-2" />
        <img src="pexels-enginakyurt-1579253.jpg" alt="Thumbnail 5" className="border-2 border-blue-500 p-2" />
        <img src="./rooms/pexels-enginakyurt-1579253.jpg" alt="Thumbnail 6" className="border-2 border-blue-500 p-2" />
      </div>
    </div>
  );
};

export default MealsGrid;
