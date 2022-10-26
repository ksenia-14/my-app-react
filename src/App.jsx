import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';
import TextSection from './components/textSection/TextSection';

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
  const [favoritesItems, setFavoritesItems] = React.useState('')

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
  }, [])

  const onRemoveCartItem = (id) => {
    axios.delete(`https://63500d1adf22c2af7b61c1de.mockapi.io/cart/${id}`)

    // все данные, которые находятся до выполнения prev.filter 
    // и отфильтровать их item.id !== id
    setCartItems((prev) => prev.filter(item => item.id !== id))
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

      <Routes>
      <Route 
          path='/favorites'
          element={<h1>Вы перешли по пути "/favorites"</h1>}
        />
      {/* <Route 
          path='/test'
          element={<h1>Вы перешли по пути "/test"</h1>}
        /> */}
        {/* <Route 
          path='/test/:number'
          element={<h1>Вы перешли по пути "/test"</h1>}
        /> */}
      </Routes>

      <Header openCart={() => setCartOpened(true)} />
      <Banner />
      <TextSection />
      <Products items={products} 
                cartItems={cartItems} 
                setCartItems={setCartItems}
                setSearch={setSearch}
                search={search}
                favoritesItems={setFavoritesItems}
      />
      <Footer />
    </div>
  );
}

export default App;
