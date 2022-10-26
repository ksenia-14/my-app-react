import axios from 'axios';
import React from 'react';
import Card from "./card/Card";
import style from "./products.module.css"

function Products(props) {

  const onAddToCart = (objCart) => {
    // отправить данные objCart по ссылке api_cart
    let api_cart = 'https://63500d1adf22c2af7b61c1de.mockapi.io/cart'
    axios.post(api_cart, objCart)
    // вернуть все, что находится в массиве cartItems на данный момент
    // и добавить объект после того, как отобразились все данные массива
    props.setCartItems([...props.cartItems, objCart])
  }

  const onAddToFavotites = (objFavorite) => {
    let api_favorites = 'https://63500d1adf22c2af7b61c1de.mockapi.io/favorites'
    axios.post(api_favorites, objFavorite)
    props.setFavoritesItems([...props.favoritesItems, objFavorite])
  }

  const onSearchInput = (inputValue) => {
    // console.log(inputValue.target.value)
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

              // onClickPlus={
              //   () => {
              //     alert("Вы выбрали товар: " + obj.title)
              //   }
              // }
              // onClickFavorite={
              //   () => {
              //     alert("Вы добавили в избранное товар: " + obj.title)
              //   }
              // }
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default Products;
