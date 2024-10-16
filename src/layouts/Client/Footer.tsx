export function Footer() {
  return (
    <footer className="w-full bg-black py-[80px] px-[135px] flex items-start justify-between text-white text-[16px] gap-x-[80px]">
      <div className="flex flex-col flex-1 gap-y-[16px]">
        <span className="text-[24px] font-bold">Exclusive</span>
        <span className="text-[20px] font-medium">Subscribe</span>
        <span>Get 10% off your first order</span>
        <input type="text" />
      </div>
      <div className="flex flex-col flex-1 gap-y-[16px]">
        <span className="text-[20px] font-medium">Support</span>
        <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
        <span>exclusive@gmail.com</span>
        <span>+88015-88888-9999</span>
      </div>
      <div className="flex flex-col flex-1 gap-y-[16px]">
        <span className="text-[20px] font-medium">Account</span>
        <span>My Account</span>
        <span>Login / Register</span>
        <span>Cart</span>
        <span>Wishlist</span>
        <span>Shop</span>
      </div>
      <div className="flex flex-col flex-1 gap-y-[16px]">
        <span className="text-[20px] font-medium">Quick Link</span>
        <span>Privacy Policy</span>
        <span>Terms Of Use</span>
        <span>FAQ</span>
        <span>Contact</span>
      </div>
      <div className="flex flex-col flex-1 gap-y-[16px]">
        <span className="text-[20px] font-medium">Download App</span>
      </div>
    </footer>
  );
}
