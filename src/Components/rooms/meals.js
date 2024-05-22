import React from "react";
import { Link } from "react-router-dom";

const MealsGrid = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">MEALS</h1>
      <div className="flex justify-center mb-6">
        <div className="w-400 border-2 border-grey-500 p-2">
          <img
            src="/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg" alt="Main" className="w-64 h-auto"
          />
        </div>
      </div>
      <div className="border-grey-400 grid grid-cols-3 h-[100%] gap-4">
        <img
          src="/images/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg"
          alt="Thumbnail 1"
          className="border-2 border-grey-00 p-2"
        />
        <img
          src="/images/mexican-tacos-with-beef-tomato-sauce-salsa.jpg"
          alt="Thumbnail 2"
          className="border-2 border-grey-400 p-2"
        />
        <img
          src="/images/pizza-with-salami-tomatoes-olives-cheese-dough-with-whole-wheat-flour-italian-food.jpg"
          alt="Thumbnail 3"
          className="border-2 border-grey-400 h-[100%] w-auto p-2"
        />
        <img
          src="/images/pizza-with-salami-tomatoes-olives-cheese-dough-with-whole-wheat-flour-italian-food.jpg"
          alt="Thumbnail 4"
          className="border-2 border-grey-500 p-2"
        />
        <img
          src="/images/pizza-with-salami-tomatoes-olives-cheese-dough-with-whole-wheat-flour-italian-food.jpg"
          alt="Thumbnail 5"
          className="border-2 border-grey-400 p-2"
        />
        <img
          src="/images/pizza-with-salami-tomatoes-olives-cheese-dough-with-whole-wheat-flour-italian-food.jpg" alt="Thumbnail 6" className="border-2 border-grey-400 p-2"/>
      </div>
    </div>
  );
};

export default MealsGrid;
