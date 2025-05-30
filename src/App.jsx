import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import CheckOutPage from "./pages/CheckOutPage"
import Order from "./pages/Order"
import { useState } from "react"
import FilterData from "./pages/FilterData"
import ProductDetails from "./pages/ProductDetails"

function App() {
  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkOut" element={<CheckOutPage setOrder={setOrder} />}></Route>
        <Route path="/order-conformation" element={<Order order={order} />}></Route>
        <Route path="/filter-data" element={<FilterData />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
