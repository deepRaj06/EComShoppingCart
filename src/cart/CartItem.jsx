import { useContext } from 'react'
import styles from "../App.module.css";
import { ShopContext } from '../context/ShopContextProvider';

const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {addToCart, cartItems, removeFromCart, updateCartItemCount} = useContext(ShopContext)

  return (
    <div className={styles.cartItem}>
        <img src={productImage} alt="cartItem" />

        <div className={styles.description}>
            <p>
                <b>{productName}</b>
            </p>
            <p>₹{price}</p>
            <div className={styles.countHandler}>
                <button onClick={() => addToCart(id)}> + </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => removeFromCart(id)}> - </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem