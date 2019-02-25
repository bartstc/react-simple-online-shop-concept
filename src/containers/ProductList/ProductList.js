import React, { Component } from 'react';
import './ProductList.scss';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import PropTypes from 'prop-types';

import SideNavigation from '../../components/Navigation/NavigationItems/SideNavigation';
import Product from './Product/Product';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

class ProductList extends Component {
  state = {
    checkboxValue: 'relevance',
  };

  handleChange = (e) => {
    this.props.handleCheckboxValue(e.target.value);
    this.props.handleDirection();
    this.props.sortProducts('price', 'id');
  };

  showDetailsByModal = id => {
    this.props.showDetails(id);
    this.props.closeModal();
  }

  render() {
    const { products, modalShowed, closeModal, openModal, showDetails, checkboxValue } = this.props;

    if (!products || products.length === 0) {
      return <Redirect to="/" />
    };

    const { title, img, subtitle, price, id } = this.props.modalProduct;

    return (
      <>
        <ScrollToTopOnMount />
        <div className="product-container">
          <Modal
            showModal={modalShowed}
            showBackdrop={modalShowed}
            closeModal={closeModal}>
            <button onClick={closeModal} className="close-modal-btn">x</button>
            <h3 className="main-title">{title}</h3>
            <img src={img} alt="" />
            <h3 className="modal-title">Info:</h3>
            <p className="modal-subtitle">{subtitle}</p>
            <h3 className="modal-title">Price: {price}.00 $</h3>
            <h3 className="modal-title">Sizes: S, M, L, XL, XXL</h3>
            <div className="btn-wrapper">
              <Link to={`/details/${id}`}>
                <Button clicked={() => this.showDetailsByModal(id)}>Show Details</Button>
              </Link>
            </div>
          </Modal>
          <div className="filter-panel">
            Sort by:
          <select onChange={this.handleChange} value={checkboxValue}>
              <option value="relevance">Relevance</option>
              <option value="price - low to high">Price - low to high</option>
              <option value="price - high to low">Price - high to low</option>
            </select>
            <p className="products-amount">Products amount: <span className="amount">{products.length}</span></p>
          </div>
          <div className="product-list-wrapper">
            <div className="navigation">
              <SideNavigation />
            </div>
            <ul className="product-list">
              {products.map(product => (
                <Product
                  key={product.id}
                  product={product}
                  showModal={openModal}
                  showDetails={showDetails}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  modalShowed: PropTypes.bool.isRequired,
  modalProduct: PropTypes.object,
  checkboxValue: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  sortProducts: PropTypes.func.isRequired,
  handleDirection: PropTypes.func.isRequired,
  handleCheckboxValue: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    modalShowed: state.interface.modalShowed,
    modalProduct: state.interface.modalProduct,
    checkboxValue: state.products.sortCheckboxValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: id => dispatch(actions.openModal(id)),
    closeModal: () => dispatch(actions.closeModal()),
    sortProducts: (priceKey, idKey) => dispatch(actions.sortProducts(priceKey, idKey)),
    handleDirection: () => dispatch(actions.handleDirection()),
    handleCheckboxValue: value => dispatch(actions.handleCheckboxValue(value)),
    showDetails: id => dispatch(actions.showDetails(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);