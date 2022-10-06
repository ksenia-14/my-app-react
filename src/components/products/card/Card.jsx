import style from "./card.module.css"

const Card = (props) => {
    return(
        <div className={style['product-item']}>
            <button className={style["favorite-btn"]}>Добавить в избранное</button>
        <img className={style['product-img']} src={props.img} alt="iPhone XR" />
        
        <p className={style['product-title']}>{props.title}</p>
        <p className={style['product-description']}>{props.description}</p>
        <p className={style['price']}>Цена</p>

        <div className={style['product-price']}>
            <span>{props.price} руб</span>
            <button className={style['add-cart']}>
            <img src="./img/plus.png" alt="plus" />
            </button>
        </div>
        </div>
    )
}

export default Card