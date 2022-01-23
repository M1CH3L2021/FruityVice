import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./hooks/useCart"
import { FruitsProvider } from "./hooks/useFruits"
import { Header } from "./components/Header"
import { Cart } from "./pages/Cart"
import { Fruit } from "./pages/Fruit"
import { Home } from "./pages/Home"
import { ToastContainer } from "react-toastify"

import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <BrowserRouter>
      <FruitsProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/fruit/:name" element={<Fruit />} />
          </Routes>
        </CartProvider>
      </FruitsProvider>
      <ToastContainer autoClose={4000}/>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
