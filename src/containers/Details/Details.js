import React, { Component, Fragment } from 'react';
import './Details.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router-dom';

import DetailItem from '../../components/Detail/DetailItem';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';

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
      this.props.openModal(this.props.detailProduct.id) :
      this.props.addToCart(this.props.detailProduct.id, this.state.value);
  };

  render() {
    if (!this.props.detailProduct) return <Redirect to="/" />

    return (
      <Fragment>
        <Modal
          modalType="small"
          showModal={this.props.modalShowed}
          showBackdrop={this.props.modalShowed}
          closeModal={this.props.closeModal}>
          <p>You must select size.</p>
          <Button clicked={this.props.closeModal} btnType="dark">Got it</Button>
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
                checked={this.state.value === 'S'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_s">S</label>
              <input
                type="radio"
                id="switch_m"
                name="switch_5"
                value="M"
                checked={this.state.value === 'M'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_m">M</label>
              <input
                type="radio"
                id="switch_l"
                name="switch_5"
                value="L"
                checked={this.state.value === 'L'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_l">L</label>
              <input
                type="radio"
                id="switch_xl"
                name="switch_5"
                value="XL"
                checked={this.state.value === 'XL'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_xl">XL</label>
              <input
                type="radio"
                id="switch_xxl"
                name="switch_5"
                value="XXL"
                checked={this.state.value === 'XXL'}
                onChange={this.handleChange}
              />
              <label htmlFor="switch_xxl">XXL</label>
            </div>
            <div className="button-wrapper">
              <Button
                clicked={this.handleAddToCart}
                disabled={this.props.detailProduct.inCart ? true : false}>
                {this.props.detailProduct.inCart ?
                  (<p>In Cart</p>) :
                  (<p>Add to Cart</p>)
                }
              </Button>
              <Button
                clicked={() => this.props.addToWishlist(this.props.detailProduct.id)}
                disabled={this.props.detailProduct.inWishlist ? true : false}>Add to Wishlist
              </Button>
            </div>
          </DetailItem>
        </ul>
      </Fragment>
    )
  }
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