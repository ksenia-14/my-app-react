import Banner from './banner/Banner';
import Products from './products/Products';
import TextSection from './textSection/TextSection';

const Home = (props) => {
  return (
    <>
      <Banner />
      <TextSection />
      <Products items={props.items}
        cartItems={props.cartItems}
        setCartItems={props.setCartItems}
        setSearch={props.setSearch}
        search={props.search}
        favoritesItems={props.favoritesItems}
        setFavoritesItems={props.setFavoritesItems}
      />
    </>
  )
}

export default Home