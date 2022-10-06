import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';
import TextSection from './components/textSection/TextSection';

function App() {
  return (
    <div className="App">
      <Cart/>
      <Header/>
      <Banner/>
      <TextSection/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
