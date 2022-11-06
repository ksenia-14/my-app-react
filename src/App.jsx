import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Favorites from './components/favorites/Favorites';
import Home from './components/Home';

function App() {

  // state для хранения товаров
  const [products, setProduct] = React.useState([])
  // state состояние корзины
  const [cartOpened, setCartOpened] = React.useState(false)
  // state для хранения товаров в корзине
  const [cartItems, setCartItems] = React.useState([])
  // state для поиска
  const [search, setSearch] = React.useState('')
  // state для хранения избранных товаров
  const [favoritesItems, setFavoritesItems] = React.useState([])
  // state для хранения состояния загрузки
  const [loading, setLoading] = React.useState(true)

  // выполнение только при первичной отрисовке: React.useEffect(() => { ... }, [])
  React.useEffect(() => {

    async function axiosData() {
      const productsData = await axios.get('https://63500d1adf22c2af7b61c1de.mockapi.io/products')
      const cartData = await axios.get('https://63500d1adf22c2af7b61c1de.mockapi.io/cart')
      const favoritesData = await axios.get('https://63500d1adf22c2af7b61c1de.mockapi.io/favorites')

      setLoading(false)

      setCartItems(cartData.data)
      setFavoritesItems(favoritesData.data)
      setProduct(productsData.data)
    }

    axiosData();

  }, [])

  const onRemoveCartItem = (id) => {
    axios.delete(`https://63500d1adf22c2af7b61c1de.mockapi.io/cart/${id}`)

    // все данные, которые находятся до выполнения prev.filter 
    // и отфильтровать их item.id !== id
    setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
  }

  return (
    <div className="App">

      {cartOpened ?
        <Cart
          onRemoveCartItem={onRemoveCartItem}
          cartItems={cartItems}
          closeCart={() => setCartOpened(false)}
        />
        : null}

      <Header openCart={() => setCartOpened(true)} cartItems={cartItems} />
      <Routes>
        <Route
          exact path='/favorites'
          element={
            <Favorites
              favoritesItems={favoritesItems}
              setFavoritesItems={setFavoritesItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          exact path='/'
          element={
            <Home
              items={products}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setSearch={setSearch}
              search={search}
              favoritesItems={favoritesItems}
              setFavoritesItems={setFavoritesItems}
              loading={loading}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
