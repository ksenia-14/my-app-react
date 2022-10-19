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

  fetch('https://63500d1adf22c2af7b61c1de.mockapi.io/products');

  return (
    <div className="App">
      {cartOpened ? <Cart closeCart={() => setCartOpened(false)} /> : null}
      <Header openCart={() => setCartOpened(true)} />
      <Banner />
      <TextSection />
      <Products items={products}/>
      <Footer />
    </div>
  );
}

export default App;
