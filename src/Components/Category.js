import React from "react";

const Category = ({ category, setCategory, cat }) => {
  return (
    <div
      className={
        cat === category
          ? "project-cat rounded-lg p-3 w-[150px] md:w-[200px] text-center cursor-pointer project-cat-active font-semibold"
          : "project-cat rounded-lg p-3 w-[150px] md:w-[200px] text-center cursor-pointer hover:bg-blue-900 font-semibold"
      }
      onClick={() => setCategory(cat)}
    >
      {cat}
    </div>
  );
};

export default Category;
