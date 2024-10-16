import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { GrFavorite } from 'react-icons/gr';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import paths from '@/configs/routes';

const Header = () => {
  return (
    <header>
      <div className="w-full flex justify-end items-center bg-black h-[48px] text-white px-[135px]">
        <div className="flex justify-between items-center w-[859px]">
          <div>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="font-bold underline ml-2">ShopNow</span>
          </div>
          <div className="flex items-center justify-end gap-x-[5px]">
            <span>English</span>
            <IoSearch />
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] flex justify-between items-center border-b border-[#c0c6cb] pt-[30px] pb-[10px] px-[135px]">
        <div className="text-[24px] font-bold">Exclusive</div>
        <div className="flex items-center text-[16px]">
          <div className="px-[30px]">
            <Link
              to={paths.INDEX_PATH}
              className="py-[5px] hover:border-b hover:border-[#7D8184] hover:transition-opacity hover:delay-500 cursor-pointer"
            >
              Home
            </Link>
          </div>
          <div className="px-[30px]">
            <Link
              to={paths.CONTACT}
              className="py-[5px] hover:border-b hover:border-[#7D8184] hover:transition-opacity hover:delay-500 cursor-pointer"
            >
              Contact
            </Link>
          </div>
          <div className="px-[30px]">
            <Link
              to={paths.ABOUT}
              className="py-[5px] hover:border-b hover:border-[#7D8184] hover:transition-opacity hover:delay-500 cursor-pointer"
            >
              About
            </Link>
          </div>
          <div className="px-[30px]">
            <Link
              to={paths.REGISTER}
              className="py-[5px] hover:border-b hover:border-[#7D8184] hover:transition-opacity hover:delay-500 cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <input
              type="text"
              className="w-[243px] h-[38px] pl-[20px] pr-[12px] py-[7px] bg-[#F5F5F5] placeholder:text-[12px]"
              placeholder="What are you looking for?"
            />
            <CiSearch size={18} className="translate-x-[-30px]" />
          </div>
          <GrFavorite size={20} />
          <RiShoppingCart2Line size={20} className="ml-[20px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
