import React from "react";
import "./Header.css";
import hamMenu from "./images/Amazon-HamMenu.PNG";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { useStateValue } from "../src/DataLayer/StateProvider";
import { auth } from "./firebase";

function Header() {
  // pulling the basket from reducer
  // first parameter gives us the state of the datalayer
  //const [state, dispatch] = useStateValue();
  //state.basket = []
  const [{ basket, user }] = useStateValue();

  //console.log("basket", basket);
  const login = () => {
    //if the user is sign-in then show sign-out
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="headerNavs">
      <div className="header__upperNav">
        <nav className="header">
          {/* hambugare menu */}
          {/* logo on the left --> img  */}

          <Link to="/">
            <img className="header__hamMenu" src={hamMenu} alt="logo" />
          </Link>

          <Link to="/">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="header_logo"
            />
          </Link>

          {/* Search box  */}
          <div className="header__searchContainer">
            <FormControl className="header__dropdownSearch">
              <Select className="header__select">
                <MenuItem className="header__menuitem" value="" disabled>
                  Alla Kategorier
                </MenuItem>
                <MenuItem value={10}>Item one</MenuItem>
                <MenuItem value={20}>Item two</MenuItem>
                <MenuItem value={30}>Item three</MenuItem>
                <MenuItem value={30}>Item four</MenuItem>
                <MenuItem value={30}>Item five</MenuItem>
              </Select>
            </FormControl>
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
          </div>

          {/* 4 Links */}
          <div className="header__nav__right">
            {/* 2st Link */}
            {/* link to login only going to show if the user is not LOG IN, so login page will show if the user is not login yet */}
            <Link to={!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className="header__optionLineOne">
                  Hej, {user?.email}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>

            {/* 2nd Link */}
            <Link to="/" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">Returer</span>
                <span className="header__optionLineTwo">& beställning</span>
              </div>
            </Link>

            {/* 3rd Link , basket icon with number on it*/}
            <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                <span className="header__basketCount">{basket?.length}</span>
                <span className="header__basketIcon">
                  <ShoppingCartIcon />
                </span>
              </div>
            </Link>
            {/* Kundvagn/cart text  */}
            <Link to="/checkout" className="header__link">
              <div className="header__optionBasketText">
                <span className="header__optionLineTwo">Kundvagn</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
      {/* second bottom navigation bar */}
      <div className="header__bottomNavbar">
        <nav className="header__bottom-nav">
          <Link to="/" className="header__link">
            <div className="header__address-icon">
              <RoomOutlinedIcon />
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hej</span>
              <span className="header__optionLineTwo">Välj din Adress</span>
            </div>
          </Link>
          <Link to="/" className="header__link middle-menu">
            <div className="header__option-bottom">
              <span className="header__optionLineBottom">Bästsäljare</span>
              <span className="header__optionLineBottom">Erbjudande</span>
              <span className="header__optionLineBottom">Sälj</span>
              <span className="header__optionLineBottom">Kundtjänst</span>
              <span className="header__optionLineBottom">Presentkort</span>
            </div>
          </Link>
          <Link to="/" className="header__link right-CovidText">
            <div className="header__bottom-nav-text">
              <span className="">Amazon's response to COVID-19</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
