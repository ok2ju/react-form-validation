import React, { Component, PropTypes } from 'react';
import isEmpty from 'lodash/isEmpty';
import { ruleRunner, run } from './utils';
import TextField from './TextField';

const fieldValidations = [
  ruleRunner('name', 'Name', required),
  ruleRunner('email', 'Email', required),
  ruleRunner('password1', 'Password', required, minLength(6)),
  ruleRunner('password2', 'Password Confirmation', mustMatch('password1', 'Password'))
];

class Register extends Component {
  state = {
    showErrors: false,
    validationErrors: {}
  };

  componentWillMount() {
    const validationErrors = run(this.state, fieldValidations);
    this.setState({ validationErrors });
  }

  handleFieldChanged = (field) => (e) => {
    this.setState({ [field]: e.target.value }, () => {
      const validationErrors = run(this.state, fieldValidations);
      this.setState({ validationErrors });
    });
  };

  handleSubmit = () => {
    this.setState({ showErrors: true });
    if (!isEmpty(this.state.validationErrors)) return null;
  };

  render() {
    return (
      <div>
        <TextField
          placeholder="Email address"
          showError={this.state.showErrors}
          text={this.props.email}
          onFieldChanged={this.handleFieldChanged("email")}
          errorText={this.errorFor("email")}
        />
      <div>
    );
  }
}

export default Register;