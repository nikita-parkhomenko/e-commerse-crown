import React from 'react';

import './SignIn-SignUpPage.scss';

import { SignIn } from '../../components/SignIn/SignIn';
import { SignUp } from '../../components/SignUp/SignUp';

export const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);