import React, { useState, useEffect } from "react";
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
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
// import LocationModal from "./LocationModalNav/LocationModal";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "375px",
    maxWidth: "375px",
    height: "272px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderColor: "#D5D9D9",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "8px",
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Header() {
  // pulling the basket from reducer
  // first parameter gives us the state of the datalayer
  //const [state, dispatch] = useStateValue();
  //state.basket = []
  const [{ basket, user }] = useStateValue();
  const [address, setAddress] = useState("");

  //for Modal
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  //console.log("basket", basket);
  const login = () => {
    //if the user is sign-in then show sign-out
    if (user) {
      auth.signOut();
    }
  };

  useEffect(() => {
    const URL =
      "https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAddress(data));
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  
  const handleValidation = () => {
    let error = "";

    if (!input) {
      error = "Input field cannot be Blank";
    }

    if (error) {
      setInput({ error: error });
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = handleValidation();
    if (isValid) {
      console.log(input);
    }
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper} style={modalStyle}>
          <div className="header__modal-container">
            <header className="header__modal">
              <h4>Välja din plats</h4>
            </header>
            <p className="header__modalText">
              Leveransmöjligheter och leveranshastigheter kan variera för olika
              platser{" "}
            </p>
            <button className="header__modalBtn">
              Logga in för att visa dina addresser
            </button>
            <p className="header__modalText">
              ----- Eller ange ett post number i Sverige----
            </p>
            <form onSubmit={handleSubmit}>
              <div className="header__modalInfo">
                <input
                  type="text"
                  name="city"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <input
                  type="text"
                  name="zipCode"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <div className="header__modal-bottom-btn">
                <div>
                  <button type="submit">Tillämpa</button>
                </div>

                <div style={{ fontSize: 12, color: " red" }}>{error}</div>

                <div>
                  <button onClick={(event) => setOpen(false)}>Close</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>

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
                    Hej, {!user ? "Guess" : user.email}
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
              {/* Address */}
              <div className="header__address-icon">
                <RoomOutlinedIcon />
              </div>
            </Link>

            <div className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne">Hej</span>
                <span
                  className="header__optionLineTwo"
                  onClick={(event) => setOpen(true)}
                >
                  {address?.city}({address?.country_code})
                </span>
              </div>
            </div>

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
    </>
  );
}

export default Header;
