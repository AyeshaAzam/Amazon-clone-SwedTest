import userEvent from "@testing-library/user-event";
import React from "react";
import "./Payment.css";
import { useStateValue } from "../DataLayer/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../DataLayer/reducer";

function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment Section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Deliver address</h3>
          </div>
          <div className="payment__address">
            {/* Adding optional chaining '?' incase user is undefined */}
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment Section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map((item, i) => {
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
        </div>

        {/* Payment Section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <div className="payment__priceContainer">
              {/* Price */}
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />

              <button className="payment__buyNow">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
