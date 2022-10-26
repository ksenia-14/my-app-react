import CartItem from "./cartItem/CartItem"
import style from "./cart.module.css"

/* const cartList = [
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
] */

const Cart = (props) => {
  return (
    <div className={style['overlay']}>
      <div className={style['cart']}>
        <div className={style["title-block"]}>
          <h2>Корзина</h2>
          <button className={style['close-btn']} onClick={props.closeCart}>X</button>
        </div>

        {
          props.cartItems.length > 0 ?
            <div className={style["cart-list"]}>
              {
                props.cartItems.map(obj => {
                  return (
                    <CartItem
                      key={obj.id}
                      id={obj.id}
                      title={obj.title}
                      price={obj.price}
                      img={obj.img}
                      onRemoveCartItem={props.onRemoveCartItem}
                    />
                  )
                })
              }
            </div>
            :
            <h2>Ваша корзина пустая</h2>
        }

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

