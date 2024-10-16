import { Layout } from '@/components/layouts';
import React from 'react';
import BannerLogin from '@/assets/imgs/BannerLogin.png';
import Button from '@/components/ui/buttons/Button';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="w-full py-[50px] flex">
      <img src={BannerLogin} alt="" />
      <div className="mx-auto flex items-center">
        <div className="w-[370px]">
          <p className="text-[36px] font-medium">Create an account</p>
          <p className="text-[16px] mt-[30px]">Enter your details below</p>
          <div className="flex flex-col gap-y-[40px] mt-[50px]">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full h-[32px] placeholder:text-[16px] border-b border-b-gray_bold"
            />
            <input
              type="text"
              name="email"
              placeholder="Email or Phone Number"
              className="w-full h-[32px] placeholder:text-[16px] border-b border-b-gray_bold"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full h-[32px] placeholder:text-[16px] border-b border-b-gray_bold"
            />
            <Button
              label="Create Account"
              className="!w-full h-[56px]"
              classNameLabel="text-[16px]"
            />
          </div>
          <div className="mt-10 text-center">
            Already have account?{' '}
            <Link className="border-b border-b-[#696969] pb-1" to={'/login'}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
