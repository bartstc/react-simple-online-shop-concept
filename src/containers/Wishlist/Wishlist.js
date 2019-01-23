import React from 'react';
import './Wishlist.scss';
import { connect } from 'react-redux';

import WishlistItem from './WishlistItem/WishlistItem';

const wishlist = (props) => {
  let list;
  (props.wishlistItems.length === 0) ? list = <p className="main-info" style={{ marginTop: '20px', fontWeight: '500' }}>You do not have any products on the list yet.</p> :
    list = (
      <ul className="wishlist-list">
        {props.wishlistItems.map(item => (
          <WishlistItem item={item} />
        ))}
      </ul>
    );

  return (
    <div className="wishlist-container">
      <h2 className="main-title">Wishlist</h2>
      <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ligula neque, at faucibus metus trum sedru.</p>
      {list}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    wishlistItems: state.products.wishlist
  }
};

export default connect(mapStateToProps)(wishlist);