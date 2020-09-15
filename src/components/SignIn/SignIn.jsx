import React, { useState } from 'react'

import './SignIn.scss';

import { FormInput } from '../FormInput/FormInput';
import { CustomButton } from '../CustomButton/CustomButton';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    alert('You are signed in!')
    setEmail('');
    setPassword('');
  }

  return(
    <div className="sign-in">
      <h1 className="title">I already have an account</h1>
      <span>Sign in with your Email and Password</span>
  
      <form onSubmit={submitHandler}>
          <FormInput
            changeHandler={e => setEmail(e.target.value)}
            name="email"
            value={email}
            type="email"
            label="email"
            required
          />
        
          <FormInput
            changeHandler={e => setPassword(e.target.value)}
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