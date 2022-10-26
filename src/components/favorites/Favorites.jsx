import React from "react";
import axios from "axios";
import style from "./favorites.module.css"
import FavoritesCard from "./favoritesCard/FavoritesCard"

const Favorites = (props) => {

  const onAddToCart = (objCart) => {
    // отправить данные objCart по ссылке api_cart
    let api_cart = 'https://63500d1adf22c2af7b61c1de.mockapi.io/cart'
    axios.post(api_cart, objCart)
    // вернуть все, что находится в массиве cartItems на данный момент
    // и добавить объект после того, как отобразились все данные массива
    props.setCartItems([...props.cartItems, objCart])
  }

  const onRemoveFavorites = (id) => {
    axios.delete(`https://63500d1adf22c2af7b61c1de.mockapi.io/favorites/${id}`)
    // взять данные, которые есть на данный момент (весь массив в state)
    // и отфильтровать так, что id объекта state не должно равняться 
    // id товара, который был нажат
    props.setFavoritesItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
  }

  return (
    <div className={style["products-section"]}>

      <div className={style["search"]}>
        <h2>Избранные товары</h2>
      </div>

      <div className={style["products"]}>
        {
          props.favoritesItems.map(obj => {
            return (
              <FavoritesCard
                key={obj.id}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                img={obj.img}
                onPlus={
                  (cartObj) => {
                    onAddToCart(cartObj)
                  }
                }
                onFavorite={
                  (id) => {
                    onRemoveFavorites(id)
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

export default Favorites