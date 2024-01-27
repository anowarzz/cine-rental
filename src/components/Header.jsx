import { useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { useContext } from "react";
import { MovieContext } from "../context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const {cartData} = useContext(MovieContext) ;



const handleCartShow = () => {
setShowCart(true)
}


console.log(cartData);



  return (
    <header>
      {showCart && <CartDetails onClose = {() => setShowCart(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={ShoppingCart} width="24" height="24" alt="" />
              {
                cartData.length > 0 && (
                  <span
                  className="rounded-full absolute top-[-12px] left-[22px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]"
                  >
                    {cartData.length}
                  </span>
                )
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
