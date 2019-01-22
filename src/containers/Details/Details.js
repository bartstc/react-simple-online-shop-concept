import React from 'react';
import './Details.scss';

import DetailItem from '../../components/Detail/DetailItem';
import Button from '../../components/UI/Button/Button';

const details = (props) => (
  <ul className="details-container">
    <DetailItem>
      <p className="detail-subtitle">Select Size:</p>
      <div className="switch-field">
        <input type="radio" id="switch_s" name="switch_5" value="S" />
        <label htmlFor="switch_s">S</label>
        <input type="radio" id="switch_m" name="switch_5" value="M" />
        <label htmlFor="switch_m">M</label>
        <input type="radio" id="switch_l" name="switch_5" value="L" />
        <label htmlFor="switch_l">L</label>
        <input type="radio" id="switch_xl" name="switch_5" value="XL" />
        <label htmlFor="switch_xl">XL</label>
        <input type="radio" id="switch_xxl" name="switch_5" value="XXL" />
        <label htmlFor="switch_xxl">XXL</label>
      </div>
      <div className="button-wrapper">
        <Button>Add to Cart</Button>
        <Button>Add to Wishlist</Button>
        <Button>Back to List</Button>
      </div>
    </DetailItem>
  </ul>
);

export default details;