import React from 'react';
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

  // выполнение только при первичной отрисовке: React.useEffect(() => { ... }, [])
  React.useEffect(() => {
    // симуляция бэкенда
    let api = 'https://63500d1adf22c2af7b61c1de.mockapi.io/products'
    // fetch(api) - создающий код - запрос
    // then( (myJson) => {} ) - потребляющий код (использует результат запроса)
    // в myJson хранится результат запроса
    fetch(api).then( (res) => {
      
      return res.json(); // возвращаем только json

    }).then( (myJson) => {

      // console.log(myJson)
      setProduct(myJson);

    })
  }, [])

  return (
    <div className="App">
      {cartOpened ? <Cart cartItems={cartItems} closeCart={() => setCartOpened(false)} /> : null}
      <Header openCart={() => setCartOpened(true)} />
      <Banner />
      <TextSection />
      <Products items={products} 
                cartItems={cartItems} 
                setCartItems={setCartItems}
                setSearch={setSearch}
                search={search}
      />
      <Footer />
    </div>
  );
}

export default App;
