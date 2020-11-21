import React from "react";
import { useStateValue } from "../DataLayer/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  //when ever you want to manipulate the dataLayer then use pull the dispatch
  //for example to remove the product...but here we don't need that right now
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* if there is nothing in my basket then show me your shopping basket is empty, else show the else part*/}
        {basket?.length === 0 ? (
          <div className="checkout__info">
            <h1>Your Shopping basket is Empty!</h1>
            <p>
              Your have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>

            {/* List out all of the Checkout Products */}
            {basket?.map((item, i) => {
              console.log("ITEM -->>> ", item);
              return (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="checkout__right">
        {basket.length > 0 && (
          <div className="checkout__subtotal">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
