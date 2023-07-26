import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Function to handle the "Add to Cart" button click
  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
