import React from "react";
import LoginForm from "../components/LoginForm";
import LogoImg from "../assets/img/zanpy-logo.png";

const LoginScreen = () => {
  return (
    <div className='h-52'>
      <div className='flex bg-main_green flex-col items-center h-screen'>
        {/*<div className='flex bg-gradient-to-b from-green-400 via-green-200 to-green-50 flex-col items-center justify-center h-screen'> */}
        <img src={LogoImg} alt='logo' className='pt-14 w-96 pb-8' />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;
