import style from "./cartItem.module.css"

const CartItem = (props) => {
    return(
        <div className={style['cart-item']}>
        <img className={style['cart-img']} src={props.img} alt="" />
        <h3 className={style['cart-title']}>
            {props.title}
            <br />
            <span className={style['cart-price']}>{props.price} руб.</span>
        </h3>
        <button className={style['close-btn']}>X</button>
    </div>
    )
}

export default CartItem