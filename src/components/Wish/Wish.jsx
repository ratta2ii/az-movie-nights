/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Wish.css';



class Wish extends React.Component {

  render() {

    let content =
      <div>
        <h1>{this.props.title} | ${this.props.price}</h1>
      </div>;

    return (
      <div id={styles.wishComponent}>
        <div>
          <h3 onClick={() => {
            this.props.onRemoveProductFromWishList(this.props);
          }}>Remove</h3>
        </div>
        {content}
      </div>
    );
  }
}

Wish.propTypes = {
  onRemoveProductFromWishList: PropTypes.func,
  title: PropTypes.string,
  price: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect()(Wish);

