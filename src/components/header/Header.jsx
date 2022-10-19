import style from './header.module.css'

const Header = (props) => {
  return (
    <header className="app">
      <h1 className={style.logo}>ITECH</h1>
      <nav>
        <a className={style['nav-item']} href=''>ИЗБРАННОЕ</a>
        <a className={style['nav-item']} onClick={props.openCart}>КОРЗИНА</a>
      </nav>
    </header>
  )
}

export default Header