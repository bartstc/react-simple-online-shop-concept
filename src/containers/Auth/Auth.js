import React, { Component } from 'react';
import './Auth.scss';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { checkValidity } from '../../shared/Validity';
import PropTypes from 'prop-types';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Mail Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
    },
    isSignup: true
  };

  inputChangedHandler = (e, controlName) => {
    const updatedControls = {
      ...this.state.controls,

      // update only one input
      [controlName]: {
        ...this.state.controls[controlName],
        value: e.target.value,
        valid: checkValidity(e.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };

    this.setState({
      controls: updatedControls
    });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        isSignup: !prevState.isSignup
      };
    });
  };

  render() {
    const { loading, error, isAuth } = this.props;
    const { controls, isSignup } = this.state;

    // convert object of objects into array of objects
    const formElementsArray = [];
    for (let key in controls) {
      formElementsArray.push({
        id: key,
        config: controls[key]
      });
    };

    let form = formElementsArray.map(formElement => (
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
    ));

    // Display Spinner
    if (loading) {
      form = <Spinner />
    };

    // Display Firebase Error Message
    let errorMessage = null;
    if (error) {
      errorMessage = (
        <p>{error.message}</p>
      )
    };

    // redirect after signin/login
    let authRedirect = null;
    if (isAuth) {
      authRedirect = <Redirect to="/" />
    };

    let title = <h1 className="auth-title">You don't have an account yet? Create them below.</h1>
    if (!isSignup) title = <h1 className="auth-title">Do you already have an account? Log in below.</h1>;

    return (
      <>
        <ScrollToTopOnMount />
        <div className="auth-container">
          {title}
          <div className="switch">
            <Button
              clicked={this.switchAuthModeHandler}
              btnType="dark">SWITCH TO {isSignup ? 'SINGIN' : 'SIGNUP'}</Button>
          </div>
          {authRedirect}
          {errorMessage}
          <form onSubmit={this.submitHandler}>
            {form}
            <Button>Submit</Button>
          </form>
        </div>
      </>
    );
  }
};

Auth.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  isAuth: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);