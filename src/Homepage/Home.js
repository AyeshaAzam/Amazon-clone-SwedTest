import React from "react";
import "./Home.css";
import Product from "../Products/Product";
import Category from "../Categories/Category";

function Home() {
  return (
    <div className="home">
      <div className="home__image">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/46/DancingQueen/Gateway/Hero/SE_DesktopHero_Template_1500x600._CB419092580_.jpg"
          alt="home-logo"
        /> */}
      </div>

      {/* product id, title, price, rating, images */}
      <div className="home__row">
        {/* 3 Products  plus 1 login in box*/}
        <Product
          id="121212"
          title="Electronic Mixture"
          price={12.29}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61KT0DrSWJL._AC_SL1100_.jpg"
        />
        <Product
          id="136799"
          title="Soft Skills: The Software Developer's Life Manual Ebook | READ ONLINE"
          price={9.9}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51WiLueukSL._SX396_BO1,204,203,200_.jpg"
        />
        <Product
          id="495380"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
        <Product
          id="234459"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>
      <div className="home__row">
        {/* 1 big row with lots of  Products */}
        <Category
          id="11555"
          image="https://images-eu.ssl-images-amazon.com/images/G/46/SE-hq/2020/img/Country_Expansion/XCM_CUTTLE_1232930_1231660_SE_3179245_200x200_1X_sv_SE._CB410673615_.jpg"
        />
        <Category
          id="12788"
          image="https://images-eu.ssl-images-amazon.com/images/G/46/SE-hq/2020/img/Country_Expansion/XCM_CUTTLE_1232930_1231662_SE_3179236_200x200_1X_sv_SE._CB410673656_.jpg"
        />
        <Category
          id="134"
          image="https://images-eu.ssl-images-amazon.com/images/G/46/SE-hq/2020/img/Country_Expansion/XCM_CUTTLE_1232930_1231664_SE_3179244_200x200_1X_sv_SE._CB410673615_.jpg"
        />
        <Category
          id="113"
          image="https://images-eu.ssl-images-amazon.com/images/G/46/DancingQueen/Gateway/Cards/XCM_Manual_1236069_1246004_SE_se_country_expansion_gw_3216265_200x200_sv_SE._CB409776755_.jpg"
        />
        <Category
          id="1145"
          image="https://images-eu.ssl-images-amazon.com/images/G/46/DancingQueen/Gateway/Launch/XCM_Manual_1234079_1236772_SE_se_country_expansion_gw_Verktyg_3189809_200x200_sv_SE._CB410827627_.jpg"
        />
      </div>
      <div className="home__row">
        {/* 1 big row with lots of  Products */}
        <Product
          id="123212"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={129.99}
          image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY218_.jpg"
          rating={5}
        />
      </div>

      <div className="home__row">
        {/* 2 Products */}
        <Product
          id="325435"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={29.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        <Product
          id="123213"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={19.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
