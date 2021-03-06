/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Error404 from './Error404/Error404';
import Home from './Home';
import ProductDetails from './ProductDetails/ProductDetails';
import Navbar from './Navbar/Navbar';
import WishList from './WishList/WishList';
import ProductList from './ProductList/ProductList';
import ReserveForm from './ReserveForm/ReserveForm';
import MyForm from './tests/MyForm/MyForm';
import Images from './Images/Images';



class App extends React.Component {

  render() {

    return (

      <div style={background}>

        <Navbar />
        <Switch>

          <Route exact path='/' render={() => <Home
            productList={this.props.masterProductList} />} />

          <Route path='/formTest' render={() => <MyForm
            wishList={this.props.wishList} />} />

          <Route path='/images' render={() => <Images />} />

          <Route path='/productdetails' render={() => <ProductDetails
            productList={this.props.masterProductList}
            selectedProduct={this.props.selectedProduct}
            wishList={this.props.wishList} />} />

          <Route path='/wishlist' render={() => <WishList
            currentRouterPath={this.props.location.pathname}
            wishList={this.props.wishList} />} />

          <Route path='/reserveform' render={() => <ReserveForm
            currentRouterPath={this.props.location.pathname} />} />

          <Route path='/productlist' render={() => <ProductList
            productList={this.props.masterProductList}
            currentRouterPath={this.props.location.pathname}
          />} />

          <Route component={Error404} />

        </Switch>
        {/* <style global jsx>{` `}</style> */}
      </div>
    );

  }

}

App.propTypes = {
  masterProductList: PropTypes.array,
  wishList: PropTypes.object,
  selectedProduct: PropTypes.object,
  location: PropTypes.object,
  currentRouterPath: PropTypes.string
};

const mapStateToProps = state => {
  return {
    masterProductList: state.masterProductList,
    selectedProduct: state.selectedProduct,
    wishList: state.wishList
  };
};

export default withRouter(connect(mapStateToProps)(App));



/* ------------------ CSS Styling Below ------------------ */

var background = {
  backgroundColor: 'rgb(12, 13, 29)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  width: '100%',
  height: '100%',
  position: 'absolute',
  overflow: 'scroll',
  overflowX: 'hidden'
};
