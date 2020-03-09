import React from 'react';
import PropTypes from 'prop-types';
import Screens from './Screens/Screens';
import Header from './Header/Header';
import ProductList from './ProductList/ProductList';
import AboutUs from './AboutUs/AboutUs';
import WishList from'./WishList/WishList';
import Footer from'./Footer/Footer';


function Home(props) {

  console.log("I am the props in the Home Component");
  console.log(props);

  return (
    <div>
      <WishList />
      {/* <Header />
      <AboutUs />
      <Screens />  */}
      <ProductList productList={props.productList} />
      <style jsx>{` `}</style>
    </div>
  );
}

Home.propTypes = {
  productList: PropTypes.array
};

export default Home;





