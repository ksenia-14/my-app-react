import style from './header.module.css'

const Header = () => {
    return(
        <header className="app">
            <h1 className={style.logo}>ITECH</h1>
            <nav>
            <a className={style['nav-item']} href=''>ИЗБРАННОЕ</a>
            <a className={style['nav-item']} href=''>КОРЗИНА</a>
            </nav>
        </header>
    )
}

export default Header