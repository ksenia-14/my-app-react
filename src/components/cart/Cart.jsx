import CartItem from "./cartItem/CartItem"
import style from "./cart.module.css"

const cartList = [
  {
    id: 1,
    title: 'iPhone XR',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 2,
    title: 'iPhone XR',
    price: '42 999',
    img: '/img/iphone-1.png'
  },
  {
    id: 3,
    title: 'iPhone XR',
    price: '42 999',
    img: '/img/iphone-1.png'
  }
]

const Cart = (props) => {
  return (
    <div className={style['overlay']}>
      <div className={style['cart']}>
        <div className={style["title-block"]}>
          <h2>Корзина</h2>
          <button className={style['close-btn']} onClick={props.closeCart}>X</button>
        </div>

        <div className={style["cart-list"]}>
          {
            cartList.map(obj => {
              return(
                <CartItem key={obj.id} title={obj.title} price={obj.price} img={obj.img} />
              )
            })
          }
        </div>

        <div className={style["total-price"]}>
          <p className={style['total-price-text']}>Итог: </p>
          <p className={style['total-price-summ']}>65 000 руб.</p>
          <button>Заказать</button>
        </div>

      </div>
    </div>
  )
}

export default Cart

