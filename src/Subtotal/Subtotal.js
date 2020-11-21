import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../DataLayer/StateProvider";
import "./Subtotal.css";
import { getBasketTotal } from "../DataLayer/reducer";
import { useHistory } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <div className="subtotal__info">
        <div className="subtotal__checkIcon">
          <CheckCircleIcon />
        </div>
        <div>
          <p className="subtotal__text">
            Your order qualifies for FREE Shipping. Choose this option at
            checkout. See details
          </p>
        </div>
      </div>

      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__price">
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="subtotal__checkout"
        onClick={(e) => history.push(user ? "/payment" : "/login")}
      >
        {user ? "Proceed to Checkout" : "Please Sign-in First"}
      </button>
    </div>
  );
}

export default Subtotal;
