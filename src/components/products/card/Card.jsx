import style from "./card.module.css"
import React from "react"

const Card = (props) => {

  const [added, setAdded] = React.useState(false);

  const onClickPlus = () => {
    setAdded(!added);
  }

  return (
    <div className={style['product-item']}>
      <button className={style['favorite-btn']}>Добавить в избранное</button>
      <img className={style['product-img']} src={props.img} alt={props.title} />

      <p className={style['product-title']}>{props.title}</p>
      <p className={style['product-description']}>{props.description}</p>
      <p className={style['price']}>Цена</p>

      <div className={style['product-price']}>
        <span>{props.price} руб</span>
        <button className={added ? style['add-cart-check'] : style['add-cart-plus']} onClick={onClickPlus}>
          <img src={added ? './img/check.png' : './img/plus.png'} alt="plus" />
        </button>
      </div>
    </div>
  )
}

export default Card