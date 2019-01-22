import React, { Component } from 'react';
import './ProductList.scss';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import SideNavigation from '../../components/Navigation/NavigationItems/SideNavigation';
import Product from './Product/Product';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

// TO ADD:
// animation on product

class ProductList extends Component {
  state = {
    checkboxValue: 'relevance'
  };

  handleChange = (e) => {
    this.setState({
      checkboxValue: e.target.value
    }, () => {
      this.props.handleDirection(this.state.checkboxValue);
      this.props.sortProducts('price', 'id');
    });
  };

  render() {
    const { products } = this.props;
    if (products.length === 0) {
      return <Redirect to="/" />
    };

    const { title, img, subtitle, price } = this.props.modalProduct;

    return (
      <div className="product-container">
        <Modal
          showModal={this.props.modalShowed}
          showBackdrop={this.props.modalShowed}
          closeModal={this.props.closeModal}>
          <button onClick={this.props.closeModal} className="close-modal-btn">x</button>
          <h3 className="main-title">{title}</h3>
          <img src={img} alt="" />
          <h3 className="modal-title">Info:</h3>
          <p className="modal-subtitle">{subtitle}</p>
          <h3 className="modal-title">Price: {price}.00 $</h3>
          <h3 className="modal-title">Sizes: S, M, L, XL, XXL</h3>
          <div className="btn-wrapper">
            <Button>Add to Wishlist</Button>
            <Button>Show Details</Button>
          </div>
        </Modal>
        <div className="filter-panel">
          Sort by:
          <select onChange={this.handleChange} value={this.state.checkboxValue}>
            <option value="relevance">Relevance</option>
            <option value="price - low to high">Price - low to high</option>
            <option value="price - high to low">Price - high to low</option>
          </select>
          <p className="products-amount">Products amount: <span className="amount">{products.length}</span></p>
        </div>
        <div className="product-list-wrapper">
          <div className="navigation">
            <SideNavigation resetCheckbox={() => {
              this.setState({
                checkboxValue: 'relevance'
              })
            }} />
          </div>
          <ul className="product-list">
            {products.map(product => (
              <Product key={product.id} product={product} showModal={this.props.openModal} />
            ))}
          </ul>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    modalShowed: state.interface.modalShowed,
    modalProduct: state.interface.modalProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (id) => dispatch(actions.openModal(id)),
    closeModal: () => dispatch(actions.closeModal()),
    sortProducts: (priceKey, idKey) => dispatch(actions.sortProducts(priceKey, idKey)),
    handleDirection: (direction) => dispatch(actions.handleDirection(direction))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);