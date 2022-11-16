import React from "react";
import axios from "axios";
import style from "./favorites.module.css"
import FavoritesCard from "./favoritesCard/FavoritesCard"

import { AppContext } from "../../App";

const Favorites = (props) => {

  const context = React.useContext(AppContext)

  const onAddToCart = async (objCart) => {
    try {
      const findCartItem = context.cartItems.find((cartItem) => cartItem.myId === objCart.myId)
      if (findCartItem) {
        // удаление с бэкенда
        axios.delete(`https://63500d1adf22c2af7b61c1de.mockapi.io/cart/${findCartItem.id}`)
        // удаление с фронтенда
        context.setCartItems(prev => prev.filter(cartItem => cartItem.myId !== objCart.myId))
      } else {
        const { data } = await axios.post('https://63500d1adf22c2af7b61c1de.mockapi.io/cart', objCart)
        context.setCartItems([...context.cartItems, data])
      }
    } catch {
      alert('Не удалось добавить товар в корзину')
    }
  }

  const onRemoveFavorites = (id) => {
    axios.delete(`https://63500d1adf22c2af7b61c1de.mockapi.io/favorites/${id}`)
    // взять данные, которые есть на данный момент (весь массив в state)
    // и отфильтровать так, что id объекта state не должно равняться 
    // id товара, который был нажат
    context.setFavoritesItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
  }

  const renderCard = () => {

    const filterItems = context.favoritesItems.filter((item) =>
      item.title.toLowerCase().includes(context.search.toLowerCase())
    )

    return (
      context.loading ? [...Array(3)] : filterItems
    ).map((obj, index) => {
      return (
        <FavoritesCard
          key={index}
          {...obj}
          isLoading={context.loading}
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

  return (
    <div className={style["products-section"]}>

      <div className={style["search"]}>
        <h2>Избранные товары</h2>
      </div>

      <div className={style["products"]}>
        { renderCard() }
      </div>
    </div>
  );
}

export default Favorites