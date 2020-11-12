import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../DataLayer/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const AddToBasket = () => {
    //Add item to Cart/BAsket .....
    // and passing a payload, that is 'item {...} here
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* // create a array of rating ( like 5 or 3) */}
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt={title} />
      <button className="product__button" onClick={AddToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
