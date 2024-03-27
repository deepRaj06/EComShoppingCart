import { BrowserRouter, Route, Routes } from "react-router-dom"
import styles from "./App.module.css"
import Shop from "./shop/Shop"
import Cart from "./cart/Cart"
import ShopContextProvider from "./context/ShopContextProvider"
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
      <div className={styles.app}>
      <ShopContextProvider>
      <BrowserRouter>
        {/* Reason to put Navbar above Routes so that it will appear on every page despite whatever page you have changed */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
    </>
  )
}

export default App
