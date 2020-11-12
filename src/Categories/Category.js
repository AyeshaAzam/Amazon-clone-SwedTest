import React from "react";
import "./Category.css";

function Category({ id, image }) {
  return (
    <div className="category">
      <div className="category__info">
        <h3>Kategorier</h3>
        <a
          target="_blank"
          className="category__a-link-normal"
          href="https://www.amazon.se/b?node=20513023031&pf_rd_r=X96KVWYBQK5G97STV5ZR&pf_rd_p=0a10ac32-f57c-42a3-901a-313f4f38b64e"
        >
          Se alla
        </a>
      </div>

      {/* have to make it like carousel-card */}
      <img className="category__image" src={image} alt="logo" />
    </div>
  );
}

export default Category;
