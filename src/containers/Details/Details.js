import React, { Component } from 'react';
import './Details.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import DetailItem from './DetailItem/DetailItem';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

class Details extends Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleAddToCart = () => {
    (this.state.value === '') ?
      this.props.openModal() :
      this.props.addToCart(this.props.detailProduct.id, this.state.value);
  };

  render() {
    const { detailProduct, modalShowed, closeModal, addToWishlist } = this.props;
    const { value } = this.state;

    if (!detailProduct) return <Redirect to="/" />

    return (
      <>
        <ScrollToTopOnMount />
        <Modal
          modalType="small"
          showModal={modalShowed}
          showBackdrop={modalShowed}
          closeModal={closeModal}>
          <p>You must select size.</p>
          <Button clicked={closeModal} btnType="dark">Got it</Button>
        </Modal>
        <ul className="details-container">
          <DetailItem>
            <p className="detail-subtitle">Select Size:</p>
            <div className="switch-field">
              <input
                type="radio"
                id="switch_s"
                name="switch_5"
                value="S"
                checked={value === 'S'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_s">S</label>
              <input
                type="radio"
                id="switch_m"
                name="switch_5"
                value="M"
                checked={value === 'M'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_m">M</label>
              <input
                type="radio"
                id="switch_l"
                name="switch_5"
                value="L"
                checked={value === 'L'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_l">L</label>
              <input
                type="radio"
                id="switch_xl"
                name="switch_5"
                value="XL"
                checked={value === 'XL'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_xl">XL</label>
              <input
                type="radio"
                id="switch_xxl"
                name="switch_5"
                value="XXL"
                checked={value === 'XXL'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_xxl">XXL</label>
            </div>
            <div className="button-wrapper">
              <Button
                clicked={this.handleAddToCart}
                disabled={detailProduct.inCart ? true : false}>
                {detailProduct.inCart ?
                  (<p>In Cart</p>) :
                  (<p>Add to Cart</p>)
                }
              </Button>
              <Button
                clicked={() => addToWishlist(detailProduct.id)}
                disabled={detailProduct.inWishlist ? true : false}>
                {detailProduct.inWishlist ?
                  (<p>In Wishlist</p>) :
                  (<p>Add to Wishlist</p>)
                }
              </Button>
            </div>
          </DetailItem>
        </ul>
      </>
    )
  }
};

Details.propTypes = {
  modalShowed: PropTypes.bool.isRequired,
  detailProduct: PropTypes.object,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  addToWishlist: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    modalShowed: state.interface.modalShowed,
    detailProduct: state.products.detailProduct
  }
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: id => dispatch(actions.openModal(id)),
    closeModal: () => dispatch(actions.closeModal()),
    addToCart: (id, size) => dispatch(actions.addToCart(id, size)),
    addToWishlist: id => dispatch(actions.addToWishlist(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);