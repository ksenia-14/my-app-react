import axios from 'axios';
import React from 'react';
import Card from "./card/Card";
import style from "./products.module.css"

function Products(props) {

  const onAddToCart = (objCart) => {
    try {
      if (props.cartItems.find((item) => Number(item.id) === Number(objCart.id))) {
        axios.delete(`https://63500d1adf22c2af7b61c1de.mockapi.io/cart/${objCart.id}`)
        props.setCartItems(prev => prev.filter(item => Number(item.id) === Number(objCart.id)))
      } else {
        // отправить данные objCart по ссылке api_cart
        axios.post('https://63500d1adf22c2af7b61c1de.mockapi.io/cart', objCart)
        // вернуть все, что находится в массиве cartItems на данный момент
        // и добавить объект после того, как отобразились все данные массива
        props.setCartItems([...props.cartItems, objCart])
      }
    } catch {
      alert('Не удалось добавить товар в корзину')
    }
  }

  const onAddToFavotites = (objFavorite) => {
    try {
      console.log(Number(objFavorite.id))
      if (props.favoritesItems.find(obj => Number(obj.id) === Number(objFavorite.id))) {
        axios.delete(`https://63500d1adf22c2af7b61c1de.mockapi.io/favorites/${objFavorite.id}`)
      } else {
        axios.post('https://63500d1adf22c2af7b61c1de.mockapi.io/favorites', objFavorite)
        props.setFavoritesItems([...props.favoritesItems, objFavorite])
      }
    } catch {
      alert('Не удалось добавить товар в избранное')
    }
  }

  const onSearchInput = (inputValue) => {
    props.setSearch(inputValue.target.value)
  }

  return (
    <div className={style["products-section"]}>
      <div className={style["search"]}>
        <h2>{props.search ? `Поиск по запросу: ` + props.search : 'Все смартфоны'}</h2>
        <div className={style["search-block"]}>
          <img src="./img/search.png" alt="search" />
          <input onChange={onSearchInput} placeholder="Поиск по товарам" />
        </div>
      </div>

      <div className={style["products"]}>
        {
          props.items.filter((item) => item.title.toLowerCase().includes(props.search.toLowerCase())).map(obj => {
            return (
              <Card
                key={obj.id}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                img={obj.img}
                id={obj.id}
                onPlus={
                  (cartObj) => {
                    // console.log(cartObj)
                    onAddToCart(cartObj)
                  }
                }
                onFavorite={
                  (favoritesObj) => {
                    onAddToFavotites(favoritesObj)
                  }
                }
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default Products;
