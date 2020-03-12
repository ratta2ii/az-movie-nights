import React from 'react';
import PropTypes from 'prop-types';
import Screens from './Screens/Screens';
import Header from './Header/Header';
import ProductList from './ProductList/ProductList';
import AboutUs from './AboutUs/AboutUs';
import WishList from'./WishList/WishList';
import Footer from'./Footer/Footer';


function Home(props) {

  return (
    <div>
      <Header />
      <AboutUs />
      <Screens /> 
      <ProductList productList={props.productList} />
      <Footer />
      <style jsx>{` `}</style>
    </div>
  );
}

Home.propTypes = {
  productList: PropTypes.array
};

export default Home;





