import { PRODUCTS } from '../Products';
import { useContext } from "react";
import styles from "../App.module.css";
import { ShopContext } from '../context/ShopContextProvider';
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className={styles.cart}>
      <div>
        <h1> Your Cart Items </h1>
      </div>
      <div className={styles.cartItems}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className={styles.checkout}>
          <p>Subtotal: ₹{totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h4>Your Cart is Empty</h4>
      )}
    </div>
  );
};

export default Cart;
