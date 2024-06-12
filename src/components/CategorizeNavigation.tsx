// components/CategorizeNavigation.tsx

import React from "react";

const CategorizeNavigation: React.FC<{
  categories: string[];
  onSelect: (category: string) => void;
}> = ({ categories, onSelect }) => {
  return (
    <div className="flex justify-center gap-4 my-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onSelect(category)}
          className="px-6 py-3 bg-slate-50 text-black border border-blue-600 rounded-full shadow-lg hover:bg-slate-100 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorizeNavigation;
