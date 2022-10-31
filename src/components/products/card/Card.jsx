import style from "./card.module.css"
import React from "react"
import ContentLoader from "react-content-loader";

const Card = (props) => {
  // const Card = ({ title, description, price, img }) => { // метод деструктуризации

  const [added, setAdded] = React.useState(props.isAdded);
  const [favorite, setFavorite] = React.useState(props.isFavorite);

  const onClickPlus = () => {
    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img
    props.onPlus({ id, myId, title, description, price, img });
    setAdded(!added);
  }

  const onClickFavorite = () => {
    let id = props.id
    let myId = props.myId
    let title = props.title
    let description = props.description
    let price = props.price
    let img = props.img
    props.onFavorite({ id, myId, title, description, price, img });
    setFavorite(!favorite);
  }

  const test = true
  return (
    <div className={style['product-item']}>
      {
        props.isLoading ?
        // test ?
          <ContentLoader
            speed={2}
            width={290}
            height={443}
            viewBox="0 0 303 463"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="4" y="48" rx="3" ry="3" width="303" height="245" />
            <rect x="-1" y="314" rx="3" ry="3" width="187" height="16" />
            <rect x="5" y="15" rx="0" ry="0" width="182" height="22" />
            <rect x="0" y="330" rx="0" ry="0" width="248" height="27" />
            <rect x="0" y="422" rx="0" ry="0" width="147" height="27" />
            <rect x="194" y="400" rx="0" ry="0" width="106" height="50" />
          </ContentLoader> :
          <>
            {
              favorite === true ?
                <button onClick={onClickFavorite} className={style['favorite-btn-added']}>Товар добавлен в избранное</button>
                :
                <button onClick={onClickFavorite} className={style['favorite-btn']}>Добавить в избранное</button>
            }
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
          </>
      }
    </div>
  )
}

export default Card