// import React, { Component } from 'react';
// import './CartItem.scss';
// import { connect } from 'react-redux';
// import * as actions from '../../../store/actions';

// import Button from '../../../components/UI/Button/Button';

// class CartItem extends Component {
//   render() {
//     const { id, img, title, size, price, total, amount } = this.props.item;
//     const { remove, increment, decrement } = this.props;

//     return (
//       <li className="cart-item">
//         <div className="img-wrapper">
//           <img className="cart-item-img" src={img} alt="" />
//         </div>
//         <div className="cart-item-content">
//           <h3 className="name">{title}</h3>
//           <p className="value">Size: {size}</p>
//           <p className="value">Quantity:</p>
//           <div className="button-wrapper">
//             <button value="-" onClick={() => decrement(id)} className="size">-</button>
//             <span className="size">{amount}</span>
//             <button value="+" onClick={() => increment(id, this.value)} className="size">+</button>
//           </div>
//           <p className="value">Price: {price}.00 $</p>
//           <p className="value">Total: {total}.00 $</p>
//           <Button clicked={() => remove(id)} btnType="small">Remove</Button>
//         </div>
//       </li>
//     )
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     remove: id => dispatch(actions.removeCartItem(id)),
//     increment: (id, value) => dispatch(actions.increment(id, value)),
//     decrement: id => dispatch(actions.decrement(id)),
//     calculateOrder: () => dispatch(actions.calculateOrder())
//   }
// };

// export default connect(null, mapDispatchToProps)(CartItem);