import React from 'react';

export const ImageGrid = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">EXPLORE MORE VISUAL DETAILS</h1>
      <div className="flex justify-center mb-6">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border-2 border-grey-300 p-1">
          <img src="/images/pillow-sofa.jpg" alt="Main" className="w-200 h- aspect: rounded-lg shadow-lg " />
        </div>
      </div>
      <div className="aspeto: grid grid-cols-3 gap-3">
        <img src="/images/pillow-sofa.jpg" alt="Pillow sofa" className="h-200 w-200 border-2 border-grey-400 p-1" />
        <img src="/images/double-bed-with-pillows.jpg" alt="Double Bed" className="border-2 border-grey-400 p-2" />
        <img src="/images/one-king-size-bed-hotel-room.jpg" alt="One King Size Bed" className="border-2 border-grey-400 p-1" />
        <img src="/images/elegant-hotel-room-with-big-bed.jpg" alt="Elegant romm with big bed" className="border-2 border-grey-400 p-1" />
        <img src="/images/spacious-hotel-room-with-rug.jpg" alt="Spacious room with rug 5" className="border-2 border-grey-400 p-1" />
        <img src="/images/spacious-room-with-bed.jpg" alt="spacious room with bed" className="border-2 border-grey-400 p-1" />
      </div>
    </div>
  );
};

export default ImageGrid;
