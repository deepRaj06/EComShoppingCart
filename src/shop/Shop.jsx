import styles from "../App.module.css";
import { PRODUCTS } from '../Products';
import Product from './Product';

const Shop = () => {
  return (
    <div className={styles.shop}>
        <div className={styles.shopTitle}>
            <h1>Techzie Shop</h1>
        </div>
        <div className={styles.products}>
            {PRODUCTS.map((product) => (
                <Product key={product.id} data={product}/>
            ))}
        </div>
    </div>
  )
}

export default Shop