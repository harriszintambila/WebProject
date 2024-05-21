import React from 'react';
// import images from './src/Components/images';

export const ImageGrid = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">EXPLORE MORE VISUAL DETAILS</h1>
      <div className="flex justify-center mb-6">
        <div className="border-2 border-blue-500 p-2">
          <img src="./src/Components/images/pillow-sofa.jpg" alt="Main" className="w-64 h-auto aspect: rounded-lg shadow-lg " />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <img src="./src/Components/images/pillow-sofa.jpg" alt="Pillow sofa" className="h-200 w-200 border-2 border-blue-500 p-2" />
        <img src="src/Components/images/double-bed-with-pillows.jpg" alt="Double Bed" className="border-2 border-blue-500 p-2" />
        <img src="src/Components/images/one-king-size-bed-hotel-room.jpg" alt="One King Size Bed" className="border-2 border-blue-500 p-2" />
        <img src="src/Components/images/elegant-hotel-room-with-big-bed.jpg" alt="Elegant romm with big bed" className="border-2 border-blue-500 p-2" />
        <img src="src/Components/images/spacious-hotel-room-with-rug.jpg" alt="Spacious room with rug 5" className="border-2 border-blue-500 p-2" />
        <img src="src/Components/images/spacious-room-with-bed.jpg" alt="spacious room with bed" className="border-2 border-blue-500 p-2" />
      </div>
    </div>
  );
};

export default ImageGrid;
