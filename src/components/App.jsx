import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Error404 from './Error404/Error404';
import Home from './Home';
import ProductDetails from './ProductDetails/ProductDetails';
import Navbar from './Navbar/Navbar';
import bgImage from '../assets/images/bg11.jpg';
// import AllProducts from './AllProducts';
// import c from './../constants';
// import Moment from 'moment';
// import { v4 } from 'uuid';



class App extends React.Component {


  render() {


    return (
      <div style={background}>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home
            productList={this.props.masterProductList} />} />

          <Route path='/productdetails' render={() => <ProductDetails 
            productList={this.props.masterProductList}
            selectedProduct={this.props.selectedProduct} 
            wishList={this.props.wishList} />} />

          {/* <Route path='/productlist' render={() => <ProductList
          listOfProducts={this.props.masterProductList} />} /> */}

          <Route component={Error404} />
        </Switch>
        <style global jsx>{` `}</style>
      </div>
    );

  }

}



App.propTypes = {
  masterProductList: PropTypes.array
};


const mapStateToProps = state => {
  return {
    masterProductList: state.masterProductList,
    selectedProduct: state.selectedProduct,
    wishList: state.wishList
  };
};


export default withRouter(connect(mapStateToProps)(App));
















// import React from 'react';
// import { Switch, Route, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Error404 from './Error404';
// import Home from './Home';
// import ProductDetails from './ProductDetails/ProductDetails';
// import Navbar from './Navbar/Navbar';
// import bgImage from '../assets/images/bg11.jpg';
// // import AllProducts from './AllProducts';
// // import c from './../constants';
// // import Moment from 'moment';
// // import { v4 } from 'uuid';



// function App() {


//   return (
//     <div style={background}>
//       <Navbar />
//       <Switch>
//         <Route exact path='/' render={() => <Home />} />

//         <Route path='/productdetails' render={() => <ProductDetails />} />

//         {/* <Route path='/productlist' render={() => <ProductList
//           listOfProducts={this.props.masterProductList} />} /> */}

//         <Route component={Error404} />
//       </Switch>
//       <style global jsx>{` `}</style> 
//     </div>
//   );
// }


// App.propTypes = {
//   masterProductList: PropTypes.array
// };


// const mapStateToProps = state => {
//   return {
//     masterProductList: state.masterProductList
//   };
// };


// export default withRouter(connect(mapStateToProps)(App));


/* ------------------ CSS Styling Below ------------------ */

var background = {
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  width: '100%',
  height: '100%',
  position: 'absolute',
  overflow: 'scroll',
  overflowX: 'hidden'
};
