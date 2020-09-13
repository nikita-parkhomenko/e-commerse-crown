import React from 'react'

import './SignIn.scss';

import { FormInput } from '../FormInput/FormInput';
import { CustomButton } from '../CustomButton/CustomButton';

export class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  changeHandler = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  submitHandler = event => {
    event.preventDefault();

    this.setState({ 
      email: '',
      password: '',
     });
  }

  render() {
    const { email, password } = this.state;
    return(
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with your Email and Password</span>

        <form onSubmit={this.submitHandler}>

            <FormInput
              changeHandler={this.changeHandler}
              name="email"
              value={email}
              type="email"
              label="email"
              required
            />
          
            <FormInput
              changeHandler={this.changeHandler}
              name="password"
              value={password}
              type="password"
              label="password"
              required
            />

          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
    )
  }
}