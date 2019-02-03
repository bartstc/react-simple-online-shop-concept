import React, { Component } from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Product extends Component {
  state = {
    isLoaded: false,
    isError: false
  };

  componentDidMount() {
    this.load(this.img);
  };

  load = img => {
    let image = img;
    image.src = this.props.product.img;
    image.onload = () => {
      this.onImageLoaded();
    };

    image.onError = () => {
      this.onImageLoadError(this.props.product.img);
    };
  };

  onImageLoaded = () => {
    this.setState({
      isLoaded: true
    });
  };

  onImageLoadError = () => {
    this.setState({
      isError: true
    });
  };

  render() {
    const { id, img, price, title } = this.props.product;

    return (
      <div className="product">
        <div className="img-wrapper">
          {!this.state.isLoaded && <Spinner />}
          <img ref={(img) => this.img = img} onClick={() => this.props.showModal(id)} className="product-img" src={img} alt={title} />
        </div>
        <p className="info">{title}</p>
        <p className="info">Price: {price}.00 $</p>
        <div className="btn-wrapper">
          <Link to={`/details/${id}`}>
            <Button
              clicked={() => this.props.showDetails(id)}
              btnType="mobile">Show Details
        </Button>
          </Link>
        </div>
      </div>
    )
  }
};

export default Product;