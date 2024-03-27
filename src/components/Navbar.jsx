import { useContext } from 'react'
import styles from "../App.module.css";
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from '../context/ShopContextProvider';

const Navbar = () => {

    const { cartItems, totalItemCount } = useContext(ShopContext);
    let totalCount = totalItemCount();
    // console.log("totalCount", totalCount)

  return (
    <div className={styles.navbar}>
        <div className={styles.links}>
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
                {cartItems.length}
            </Link>
            <div className={styles.cartItemsTotalCount}>
            {totalCount}
            </div>
        </div>
    </div>
  )
}

export default Navbar