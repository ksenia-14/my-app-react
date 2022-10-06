import style from './banner.module.css';

const Banner = () => {
    return(
        <div className={style['banner-section']}>
            <div className={style['banner']}>
                <p className={style['text-banner']}>Лучшие цены 
                    <br/>
                    <span>на все смартфоны</span>
                    <br/>
                    <button className={style['banner-btn']}>Купить iPhone</button>
                </p>
            </div>
        </div>
    )
}

export default Banner