import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { useStateValue } from "../DataLayer/StateProvider";

// in the checkoutProduct I will see all the product I have added in the CART/BAsket
function CheckoutProduct({ id, title, image, price, rating }) {
  //when ever you want to manipulate the dataLayer then use pull the dispatch
  const [{ basket }, dispatch] = useStateValue(); // i dont need basket here

  console.log(id, title, image, price, rating);

  const removeFromBasket = () => {
    //remove item from basket...
    // dispatch({
    //   type: "REMOVE_FROM_BASKET",
    //   item: {
    //     id: id,
    //   },
    // });
    // the above dispatch({...}) code isn't working to remove the item from BAsket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const SaveForLater = () => {};

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__text">
          Endast 3 kvar i lager (fler är på väg).
        </p>
        <p className="checkoutProduct__text">Kvalificerar för FRI frakt</p>
        <p className="checkoutProduct__price">
          <small>Sek </small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>

        <div className="checkoutProduct__buttons">
          {/* https://material-ui.com/components/selects/ */}

          <FormControl className="checkoutProduct__selectItems">
            <NativeSelect>
              <option aria-label="none" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </NativeSelect>
          </FormControl>

          <button
            onClick={removeFromBasket}
            className="checkoutProduct__remove"
          >
            Remove from basket
          </button>
          <button
            onClick={SaveForLater}
            className="checkoutProduct__SaveForlater"
          >
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
