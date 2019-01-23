import React from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';

const product = (props) => {
  const { id, img, price, title } = props.product;

  return (
    <div className="product">
      <div className="img-wrapper">
        <img onClick={() => props.showModal(id)} className="product-img" src={img} alt={title} />
      </div>
      <p className="info">{title}</p>
      <p className="info">Price: {price}.00 $</p>
      <div className="btn-wrapper">
        <Link to={`/details/${id}`}>
          <Button
            clicked={() => props.showDetails(id)}
            btnType="mobile">Show Details
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default product;