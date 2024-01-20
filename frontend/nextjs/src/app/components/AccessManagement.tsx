"use client"

import Login from './Login';
import ForgotPassword from './ForgotPassword';
import React, { useState, MouseEventHandler } from 'react';

const LoginPage = () => {
  const [isResetPassword, setIsResetPassword] = useState(false);

  if (isResetPassword) {
    return <ResetPasswordComponent onBack={() => setIsResetPassword(false)} />;
  } else {
    return <LoginComponent onForgotPassword={() => setIsResetPassword(true)} />;
  }
};

const LoginComponent = ({ onForgotPassword }: { onForgotPassword: MouseEventHandler }) => (
  <div>
    <Login />
    <button className="w-100 btn btn-lg btn-secondary border rounded" onClick={onForgotPassword}>Ho dimenticato la password</button>
  </div>
);

const ResetPasswordComponent = ({ onBack }: { onBack: MouseEventHandler }) => (
  <div>
    <ForgotPassword />
    <button className="w-100 btn btn-lg btn-secondary border rounded" onClick={onBack}>Torna al login</button>
  </div>
);

export default LoginPage;
