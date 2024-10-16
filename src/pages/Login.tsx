import { Layout } from '@/components/layouts';
import React from 'react';
import BannerLogin from '@/assets/imgs/BannerLogin.png';
import Button from '@/components/ui/buttons/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="w-full py-[50px] flex">
      <img src={BannerLogin} alt="" />
      <div className="mx-auto flex items-center">
        <div className="w-[370px]">
          <p className="text-[36px] font-medium">Log in to Exclusive</p>
          <p className="text-[16px] mt-[30px]">Enter your details below</p>
          <div className="flex flex-col gap-y-[40px] mt-[50px]">
            <input
              type="text"
              name="name"
              placeholder="Email or Phone number"
              className="w-full h-[32px] placeholder:text-[16px] border-b border-b-gray_bold"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full h-[32px] placeholder:text-[16px] border-b border-b-gray_bold"
            />
            <div className="flex items-center justify-between">
              <Button
                label="Login"
                className="max-w-[143px] h-[56px]"
                classNameLabel="text-[16px]"
              />
              <Link className="text-danger" to={'/'}>
                Forget Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
