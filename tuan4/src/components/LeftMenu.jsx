import React from "react";

const LeftMenu = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 h-full">
      <div className="flex items-center mb-6">
        <img
          src="https://placehold.co/50x50"
          alt="Logo"
          className="w-12 h-12 mr-2"
        />
        <span className="text-lg font-bold">Chefify</span>
      </div>
      
      <nav>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-500">What to cook</a></li>
          <li><a href="#" className="hover:text-blue-500">Recipes</a></li>
          <li><a href="#" className="hover:text-blue-500">Ingredients</a></li>
          <li><a href="#" className="hover:text-blue-500">Occasions</a></li>
          <li><a href="#" className="hover:text-blue-500">About Us</a></li>
        </ul>
      </nav>

      <div className="mt-6 border-t pt-4">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/30x30" alt="Check" className="h-6" />
          <p className="text-pink-500 font-semibold">Your RecipeBox</p>
        </div>
        <div className="flex items-center mt-4">
          <img
            src="https://placehold.co/50x50"
            alt="Avatar"
            className="h-10 rounded-full"
          />
          <span className="ml-3 text-gray-700">Emma Gonzalez</span>
        </div>
      </div>
    </aside>
  );
};

export default LeftMenu;
