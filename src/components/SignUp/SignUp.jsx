import React, { useState } from 'react';

import './SignUp.scss';

import { FormInput } from '../FormInput/FormInput';
import { CustomButton } from '../CustomButton/CustomButton';

export const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password does not match!');

      return;
    }

    setDisplayName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

    alert('Congratulations, your profile has been registered.')
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have account</h2>
      <span>Sign up with your Email and Password</span>

      <form 
        onSubmit={onSubmitHandler}
        className="sign-up-form"
      >
        <FormInput
          changeHandler={e => setDisplayName(e.target.value)}
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          required
        />
        <FormInput 
          changeHandler={e => setEmail(e.target.value)}
          type="email"
          name="email"
          value={email}
          label="Email"
          required
        />
        <FormInput 
          changeHandler={e => setPassword(e.target.value)}
          type="password"
          name="password"
          value={password}
          label="Password"
          required
        />
        <FormInput 
          changeHandler={e => setConfirmPassword(e.target.value)}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Passworde"
          required
        />

        <CustomButton type="submit">
          Sign Up
        </CustomButton>
      </form>
    </div>
  )
};