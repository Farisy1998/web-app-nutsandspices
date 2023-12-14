import React from "react";

const Pagination = (props) => {
  const { categories, onCategoryChange, currentCategory } = props;
  if (categories.length === 0) return "No products inside database";
  return (
    <nav id="pagination_nav">
      <ul id="pagination_ul" className="pagination">
        {categories.map((category) => (
          <li
            key={category.category_id}
            id="pagination_li"
            className={
              category.category_id === currentCategory
                ? "page-item active"
                : "page-item"
            }
          >
            <a
              id="pagination_a"
              className="page-link"
              onClick={() => onCategoryChange(category.category_id)}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
