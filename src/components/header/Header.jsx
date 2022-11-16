import { Link } from 'react-router-dom'
import style from './header.module.css'

const Header = (props) => {
  return (
    <header className="app">
      <Link to='/'>
        <h1 className={style.logo}>ITECH</h1>
      </Link>

      <nav>

        <Link to='/favorites'>
          <div className={style['count-sector']}>
            <p className={style['nav-item']}>ИЗБРАННОЕ</p>
            <div className={style['count-favorites-items']}>
              <img src='./img/heart.svg' alt="heart"></img>
              <span>{props.favoritesItems.length}</span>
            </div>
          </div>
        </Link>

        <div className={style['count-sector']}>
          <p className={style['nav-item']} onClick={props.openCart}>КОРЗИНА</p>
          <div className={style['count-cart-items']}><span>{props.cartItems.length}</span></div>
        </div>

      </nav>
    </header>
  )
}

export default Header