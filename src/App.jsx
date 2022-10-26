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
  const [products, setProduct] = React.useState([]);
  // state состояние корзины
  const [cartOpened, setCartOpened] = React.useState(false);
  // state для хранения товаров в корзине
  const [cartItems, setCartItems] = React.useState([]);
  // state для поиска
  const [search, setSearch] = React.useState('');
  // state для хранения избранных товаров
  const [favoritesItems, setFavoritesItems] = React.useState([])

  // выполнение только при первичной отрисовке: React.useEffect(() => { ... }, [])
  React.useEffect(() => {
    // симуляция бэкенда
    // let api = 'https://63500d1adf22c2af7b61c1de.mockapi.io/products'
    // fetch(api) - создающий код - запрос
    // then( (myJson) => {} ) - потребляющий код (использует результат запроса)
    // в myJson хранится результат запроса
    // fetch(api).then( (res) => { 
    //   return res.json(); // возвращаем только json
    // }).then( (myJson) => {
    //   console.log(myJson)
    //   setProduct(myJson);
    // })

    let api_products = 'https://63500d1adf22c2af7b61c1de.mockapi.io/products'
    axios.get(api_products).then((res) => {
      setProduct(res.data)
    })

    let api_cart = 'https://63500d1adf22c2af7b61c1de.mockapi.io/cart'
    axios.get(api_cart).then((res) => {
      setCartItems(res.data)
    })

    let api_favorites = 'https://63500d1adf22c2af7b61c1de.mockapi.io/favorites'
    axios.get(api_favorites).then((res) => {
      setFavoritesItems(res.data)
    })
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

      <Header openCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path='/favorites'
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
          path='/'
          element={
            <Home
              items={products}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setSearch={setSearch}
              search={search}
              favoritesItems={favoritesItems}
              setFavoritesItems={setFavoritesItems}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
