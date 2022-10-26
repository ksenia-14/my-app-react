import style from "./favoritesCard.module.css"
import React from "react"

const FavoritesCard = (props) => {
  const [added, setAdded] = React.useState(false);
  const[favorite, setFavorite] = React.useState(true);

  const onClickPlus = () => {
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img
    props.onPlus({title, description, price, img});
    setAdded(!added);
  }

  const onClickFavorite = () => {
    props.onFavorite(props.id);
    // setFavorite(!favorite);
  }

  return (
    <div className={style['product-item']}>
      {/* {
        favorite === true ? 
        <button onClick={onClickFavorite} className={style['favorite-btn-added']}>Товар добавлен в избранное</button>
        :
        <button onClick={onClickFavorite} className={style['favorite-btn']}>Добавить в избранное</button>
      } */}
      
      <button onClick={onClickFavorite} className={style['favorite-btn-added']}>Товар добавлен в избранное</button>

      <img className={style['product-img']} src={props.img} alt={props.title} />

      <p className={style['product-title']}>{props.title}</p>
      <p className={style['product-description']}>{props.description}</p>
      <p className={style['price']}>Цена</p>

      <div className={style['product-price']}>
        <span>{props.price} руб</span>
        <button className={added ? style['add-cart-check'] : style['add-cart-plus']} onClick={onClickPlus}>
          <img src={added ? './img/check-lg.svg' : './img/plus.png'} alt="plus" />
        </button>
      </div>
    </div>
  )
}

export default FavoritesCard