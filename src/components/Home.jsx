import React from 'react';
import Screens from './Screens/Screens';
import Header from './Header/Header';
import ProductList from './ProductList/ProductList';
import AboutUs from './AboutUs/AboutUs';
import Footer from'./Footer/Footer';


function Home() {

  return (
    <div>
      <Header />
      <AboutUs />
      <Screens />
      <ProductList />
      <style jsx>{` `}</style>
    </div>
  );
}

export default Home;





