import React from "react";
import { Link } from "react-router-dom";

const MealsGrid = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">RESTARAUNTS</h1>
      <div className="flex justify-center mb-6">
        <div className="min-h-medium w-1000 border-2 justify-center p-2 ">
          <img
            src="/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg" alt="Main" className="h-80 w-100"
          />
        </div>
      </div>
      <div className="border-grey-400 grid grid-cols-3 h-64 w-85 gap-4">
        <img
          src="/images/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg"
          alt="chicken"
          className="border-2 border-grey-00 p-1"
        />
        <img
          src="/images/mexican-tacos-with-beef-tomato-sauce-salsa.jpg"
          alt="mexican"
          className="border-2 border-grey-400 p-1"
        />
        <img
          src="/images/pizza-with-salami-tomatoes-olives-cheese-dough-with-whole-wheat-flour-italian-food.jpg"
          alt="pizza"
          className="border-2 border-grey-400 p-1"
        />
        <img
          src="/images/mexican-tacos-with-beef-tomato-sauce-salsa.jpg"
          alt="pizza"
          className="border-2 border-grey-400 p-1"
        />
        <img
          src="/images/pizza-with-salami-tomatoes-olives-cheese-dough-with-whole-wheat-flour-italian-food.jpg"
          alt="pizza"
          className="border-2 border-grey-400 p-1"
        />
        <img
          src="/images/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg" alt="pizza" className="border-2 border-grey-400 p-1"/>
      </div>
    </div>
  );
};

export default MealsGrid;
