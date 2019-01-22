import React from 'react';
import './DetailItem.scss';

import testImg from '../../assets/test.png';

const detailItem = (props) => (
  <li className="detail-item">
    <h3 className="detail-title">Womens coat one</h3>
    <p className="detail-value">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="detail-content">
      <div className="detail-img-wrapper">
        <img src={testImg} alt="" className="detail-item-img" />
      </div>
      <div className="detail-info">
        <h3 className="detail-subtitle">Description:</h3>
        <p className="detail-value">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, vitae quasi doloribus voluptate voluptas labore blanditiis dolorum ducimus enim expedita. Ipsam harum, cumque ducimus laboriosam culpa nulla ipsum, nam dolorem voluptatibus suscipit repellat atque ea maiores at numquam quos labore?</p>
        <h3 className="detail-subtitle">Price: 240.00 $</h3>
        {props.children}
      </div>
    </div>
  </li>
)

export default detailItem;