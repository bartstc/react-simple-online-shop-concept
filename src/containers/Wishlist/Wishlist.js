import React from 'react';
import './Wishlist.scss';

import DetailItem from '../../components/Detail/DetailItem';
import Button from '../../components/UI/Button/Button';

const Wishlist = (props) => (
  <div className="wishlist-container">
    <h2 className="main-title">Wishlist</h2>
    <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ligula neque, at faucibus metus rutrum sed. </p>
    <ul className="wishlist-list">
      <DetailItem>
        <Button>Show Details</Button>
      </DetailItem>
    </ul>
  </div>
);

export default Wishlist;