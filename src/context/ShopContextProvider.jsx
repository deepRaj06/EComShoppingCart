import { PRODUCTS } from '../Products';
import { createContext, useState } from 'react'

export const ShopContext = createContext(null);

// initially defining each item having id as i is having 0 item present
const getDefaultCart = () => {
    let cart = {};

    for(let i=1; i<PRODUCTS.length+1; i++){
        cart[i] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    // adding item to cart by incrementing itemId of prev
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
    }

    // removing item from cart by decrementing itemId of prev
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
    }

    // updating item count in cart 
    const updateCartItemCount = (newCount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newCount}));
    }

    // total amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    // total selected item count
    const totalItemCount = () => {
        let totalCount = 0
        for(let key in cartItems){
            if(cartItems[key] > 0){
                totalCount = totalCount + cartItems[key]
            }
        }
        return totalCount;
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, totalItemCount}
    // console.log("cartItems", cartItems)
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider