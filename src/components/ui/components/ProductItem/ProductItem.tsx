import React from 'react';
import styles from './ProductItem.module.css';
import classNames from 'classnames';
import { GrFavorite } from 'react-icons/gr';
import EyeIcon from '../../../icons/Eye';
import StarIcon from '../../../icons/Star';

type ProductItemType = {
  image: string;
  name: string;
  price: number;
  sale_price?: number;
  is_sale: boolean;
};

const ProductItem = ({ image, name, price, sale_price, is_sale }: ProductItemType) => {
  return (
    <div className={classNames("flex flex-col gap-y-[10px]")}>
      <div className={classNames("relative max-w-[270px] h-[250px] bg-gray rounded-[4px] p-[10px]", styles.product)}>
        <img
          src={image}
          alt=""
          className={classNames('', styles.product_image)}
        />
        <span className="absolute top-[10px] left-[10px] text-[12px] px-[15px] py-[4px] bg-danger rounded-[4px] text-white leading-[18px]">
          -40%
        </span>
        <div className="absolute top-[10px] right-[10px] flex flex-col gap-y-[5px]">
          <span className="flex items-center justify-center w-[34px] h-[34px] bg-white rounded-[50%]">
            <GrFavorite size={20} />
          </span>
          <span className="flex items-center justify-center w-[34px] h-[34px] bg-white rounded-[50%]">
            <EyeIcon />
          </span>
        </div>
        <div className={classNames('absolute bottom-0 left-0 w-full h-[41px] bg-black text-white text-center text-[16px] font-medium py-[5px] rounded-b-[4px] cursor-pointer', styles.add_to_cart)}>Add To Cart</div>
      </div>
      <div className="text-[16px] font-medium">HAVIT HV-G92 Gamepad</div>
      <div className='text-[16px] font-medium flex items-center gap-x-[10px]'>
        <span className='text-danger'>${is_sale ? sale_price: price}</span>
        {is_sale && <span className='text-[#7D8184] line-through'>${price}</span>}
      </div>
      <div className='flex items-center gap-x-[10px]'>
        <div className='flex items-center gap-x-[3px]'>
        <StarIcon color='#FFAD33'/>
        <StarIcon color='#FFAD33'/>
        <StarIcon color='#FFAD33'/>
        <StarIcon color='#FFAD33'/>
        <StarIcon color='#FFAD33'/>
        </div>
        <div className='text-gray_bold text-[14px] font-semibold'>(88)</div>
      </div>
    </div>
  );
};

export default ProductItem;
