import { useContext } from 'react'
import styles from "../App.module.css";
import { ShopContext } from '../context/ShopContextProvider';

const Product = (props) => {

    const { id, productName, price, productImage } = props.data;
    console.log("props", props);
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemCount = cartItems[id];
    
  return (
    <div className={styles.product}>
        <img src={productImage} alt="product" />
        <div className={styles.description}>
            <p><b>{productName}</b></p>
            <p>₹{price}</p>
        </div>
        <button className={styles.addToCartBttn} onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <>({cartItemCount})</>}
        </button>
    </div>
  )
}

export default Product