import { GoChevronRight } from 'react-icons/go';
import Frame560 from '@/assets/imgs/Frame_560.png';
import product1 from '@/assets/imgs/product_1.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Block from '@/components/ui/commons/Block';
import ProductItem from '@/components/ui/components/ProductItem/ProductItem';
import Button from '@/components/ui/buttons/Button';
import PhoneIcon from '@/components/icons/Phone';

function HomePage() {
  return (
    <div className="px-[135px]">
      <div className="flex">
        <div className="w-full max-w-[238px] h-auto pt-[40px] pr-[15px] border-r border-r-[#c0c6cb]">
          <ul className="flex flex-col gap-y-[10px]">
            <li className="flex items-center justify-between">
              <span>Woman's Fashion</span>
              <GoChevronRight />
            </li>
            <li className="flex items-center justify-between">
              <span>Men's Fashion</span> <GoChevronRight />
            </li>
            <li>Electionics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toy's</li>
            <li>Groceries & Pes</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="pt-[40px] pl-[40px]">
          <img src={Frame560} alt="" />
        </div>
      </div>
      {/* Today's */}
      <Block title="Today's" lineBottom>
        <div className="flex items-center justify-between py-[20px]">
          <div className="flex items-center gap-x-[50px]">
            <div className="text-[36px] font-semibold">Flash Sales</div>
            <div className="text-[32px] font-bold">Timer Count Down</div>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <span className="flex items-center justify-center w-[46px] h-[46px] bg-gray rounded-[50%]">
              <FaArrowLeft />
            </span>
            <span className="flex items-center justify-center w-[46px] h-[46px] bg-gray rounded-[50%]">
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-x-7">
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
          </div>
          <div className="mt-[50px] flex justify-center">
            <Button label="View All Products" className="w-[234px]" />
          </div>
        </div>
      </Block>
      {/* Categories */}
      <Block title="Categories" lineBottom>
        <div className="flex items-center justify-between py-[20px]">
          <div className="flex items-center gap-x-[50px]">
            <div className="text-[36px] font-semibold">Browse By Category</div>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <span className="flex items-center justify-center w-[46px] h-[46px] bg-gray rounded-[50%]">
              <FaArrowLeft />
            </span>
            <span className="flex items-center justify-center w-[46px] h-[46px] bg-gray rounded-[50%]">
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div className="w-full py-[30px] flex items-center justify-between flex-wrap gap-[30px]">
          <div className="min-w-[145px] h-[145px] flex flex-col gap-y-[10px] items-center justify-center flex-1 border border-gray rounded-[4px] hover:bg-danger hover:text-white cursor-pointer">
            <PhoneIcon />
            <div className="text-[16px]">Phone</div>
          </div>
          <div className="min-w-[145px] h-[145px] flex flex-col gap-y-[10px] items-center justify-center flex-1 border border-gray rounded-[4px] hover:bg-danger hover:text-white cursor-pointer">
            <PhoneIcon />
            <div className="text-[16px]">Phone</div>
          </div>
          <div className="min-w-[145px] h-[145px] flex flex-col gap-y-[10px] items-center justify-center flex-1 border border-gray rounded-[4px] hover:bg-danger hover:text-white cursor-pointer">
            <PhoneIcon />
            <div className="text-[16px]">Phone</div>
          </div>
          <div className="min-w-[145px] h-[145px] flex flex-col gap-y-[10px] items-center justify-center flex-1 border border-gray rounded-[4px] hover:bg-danger hover:text-white cursor-pointer">
            <PhoneIcon />
            <div className="text-[16px]">Phone</div>
          </div>
          <div className="min-w-[145px] h-[145px] flex flex-col gap-y-[10px] items-center justify-center flex-1 border border-gray rounded-[4px] hover:bg-danger hover:text-white cursor-pointer">
            <PhoneIcon />
            <div className="text-[16px]">Phone</div>
          </div>
          <div className="min-w-[145px] h-[145px] flex flex-col gap-y-[10px] items-center justify-center flex-1 border border-gray rounded-[4px] hover:bg-danger hover:text-white cursor-pointer">
            <PhoneIcon />
            <div className="text-[16px]">Phone</div>
          </div>
        </div>
      </Block>
      <Block title="This Month">
        <div className="flex items-center justify-between py-[20px]">
          <div className="text-[36px] font-semibold">Browse By Category</div>
          <Button label="View All" />
        </div>
        <div>
          <div className="grid grid-cols-4 gap-x-7">
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
          </div>
        </div>
      </Block>
      <Block title="Our Products">
        <div className="flex items-center justify-between py-[20px]">
          <div className="text-[36px] font-semibold">Explore Our Products</div>
          <div className="flex items-center gap-x-[10px]">
            <span className="flex items-center justify-center w-[46px] h-[46px] bg-gray rounded-[50%]">
              <FaArrowLeft />
            </span>
            <span className="flex items-center justify-center w-[46px] h-[46px] bg-gray rounded-[50%]">
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-x-7 gap-y-14 max-lg:grid-cols-3 max-sm:grid-cols-2">
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
            <ProductItem
              image={product1}
              name="HAVIT HV-G92 Gamepad"
              price={120}
              is_sale
              sale_price={110}
            />
          </div>
        </div>
      </Block>
    </div>
  );
}

export default HomePage;
