import axios from 'axios';
import React from 'react';
import Card from "./card/Card";
import style from "./products.module.css"

function Products(props) {

  // async - асинхронная функция
  const onAddToCart = async (objCart) => {
    try {
      const findCartItem = props.cartItems.find((cartItem) => cartItem.myId === objCart.myId)
      if (findCartItem) {
        // удаление с бэкенда
        axios.delete(`https://63500d1adf22c2af7b61c1de.mockapi.io/cart/${findCartItem.id}`)
        // удаление с фронтенда
        props.setCartItems(prev => prev.filter(cartItem => cartItem.myId !== objCart.myId))
      } else {
        // деструктуризация
        // дожидаемся, когда выполнится этот запрос, потом выполняем props.setCartItems
        const { data } = await axios.post('https://63500d1adf22c2af7b61c1de.mockapi.io/cart', objCart)
        // вернуть все, что находится в массиве cartItems на данный момент
        // и добавить объект после того, как отобразились все данные массива
        props.setCartItems([...props.cartItems, data])
      }
    } catch {
      alert('Не удалось добавить товар в корзину')
    }
  }

  const onAddToFavotites = async (objFavorite) => {
    try {
      const findFavoriteItem = props.favoritesItems.find((favoriteItem) => favoriteItem.myId === objFavorite.myId)
      if (findFavoriteItem) {
        axios.delete(`https://63500d1adf22c2af7b61c1de.mockapi.io/favorites/${findFavoriteItem.id}`)
      } else {
        const { data } = await axios.post('https://63500d1adf22c2af7b61c1de.mockapi.io/favorites', objFavorite)
        props.setFavoritesItems([...props.favoritesItems, data])
      }
    } catch {
      alert('Не удалось добавить товар в избранное')
    }
  }

  const onSearchInput = (inputValue) => {
    props.setSearch(inputValue.target.value)
  }

  const renderCard = () => {

    const filterItems = props.items.filter((item) =>
      item.title.toLowerCase().includes(props.search.toLowerCase())
    )

    return (
      props.loading ? [...Array(6)] : filterItems
    ).map((obj, index) => {
      return (
        <Card
          key={index}
          {...obj}

          isLoading={props.loading}
          isAdded={props.cartItems.some((objIsAdded) => objIsAdded.myId === obj.myId)} // some - возвращает true/false
          isFavorite={props.favoritesItems.some((objIsFavorite) => objIsFavorite.myId === obj.myId)}

          onFavorite={
            (favoritesObj) => {
              onAddToFavotites(favoritesObj)
            }
          }
          onPlus={
            (cartObj) => {
              onAddToCart(cartObj)
            }
          }
        />
      )
    })
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
          renderCard()
        }
      </div>
    </div>
  );
}

export default Products;
