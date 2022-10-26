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
          <p className={style['nav-item']} href=''>ИЗБРАННОЕ</p>
        </Link>
        <p className={style['nav-item']} onClick={props.openCart}>КОРЗИНА</p>
      </nav>
    </header>
  )
}

export default Header