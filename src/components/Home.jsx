import Banner from './banner/Banner';
import Products from './products/Products';
import TextSection from './textSection/TextSection';
import TestSlider from './sliders/TestSlider';

const Home = (props) => {
  return (
    <>
      {/* <Banner /> */}
      <TestSlider />
      <TextSection />
      <Products 
        items={props.items}
        cartItems={props.cartItems}
        setCartItems={props.setCartItems}
        setSearch={props.setSearch}
        search={props.search}
        favoritesItems={props.favoritesItems}
        setFavoritesItems={props.setFavoritesItems}
        loading={props.loading}
      />
    </>
  )
}

export default Home