import React, { Component } from 'react';
import './ContactForm.scss';
import axios from '../../../axios';
import { connect } from 'react-redux';
import ErrorHandler from '../../../hoc/ErrorHandler';
import * as actions from '../../../store/actions';
import { checkValidity } from '../../../shared/Validity';
import PropTypes from 'prop-types';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactForm extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'E-mail'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ]
        },
        value: 'fastest',
        valid: true,
        validation: {}
      },
    },
    formIsValid: false
  };

  orderHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let formElementIndentifier in this.state.orderForm) {
      formData[formElementIndentifier] = this.state.orderForm[formElementIndentifier].value
    }

    const order = {
      products: this.props.cartItems,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId
    };

    this.props.purchaseOrder(order, this.props.token);
  };

  // ====== Immutably changind input values ======
  inputChangedHandler = (e, inputIndentifier) => {
    // clone of orderForm
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    // clone each elements (name, street, ...)
    const updatedFormElement = {
      ...updatedOrderForm[inputIndentifier]
    };

    // listener for each value of elements
    updatedFormElement.value = e.target.value;

    // VALIDATION
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    };

    // change each element value in orderForm elements
    updatedOrderForm[inputIndentifier] = updatedFormElement;

    this.setState({
      orderForm: updatedOrderForm,
      formIsValid
    });
  };

  render() {
    // convert object of objects into array of objects
    const formElementsArray = [];
    for (let key in this.state.orderForm) { // keys are name, street, ...
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    };

    let form = (
      <form className="contact-form" onSubmit={this.orderHandler}>
        <h3 className="title">Enter Your Contact Data</h3>
        {/* <Input elementType="..." elementConfig="..." value="..." /> */}
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(e) => this.inputChangedHandler(e, formElement.id)}
          />
        ))}
        <Button
          btnType="dark"
          clicked={this.orderHandler}
          disabled={!this.state.formIsValid}>Order</Button>
      </form>
    );

    if (this.props.loading) {
      form = <Spinner />
    }

    return form;
  }
};

ContactForm.propTypes = {
  cartItems: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  token: PropTypes.string,
  userId: PropTypes.string,
  purchaseOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    cartItems: state.products.cart,
    price: state.products.orderTotal,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    purchaseOrder: (orderData, token) => dispatch(actions.purchaseOrder(orderData, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(ContactForm, axios));