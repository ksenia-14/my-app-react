import Card from "./card/Card";
import style from "./products.module.css"

function Products() {
      let price = "49 999";

      return (
            <div className={style["products-section"]}>
                  <div className={style["search"]}>
                        <h2>Все смартфоны</h2>
                        <div className={style["search-block"]}>
                              <img src="./img/search.png" alt="search" />
                              <input placeholder="Поиск по товарам" />
                        </div>
                  </div>

                  <div className={style["products"]}>
                        <Card
                              title="iPhone XR"
                              description="Короткое описание продукта"
                              price={price}
                              img="./img/iphone-1.png"
                        />
                        {/* прокидываем пропсы */}
                        <Card
                              title="iPhone XR"
                              description="Короткое описание продукта"
                              price={price}
                              img="./img/iphone-1.png"
                        />
                        <Card
                              title="iPhone XR"
                              description="Короткое описание продукта"
                              price={price}
                              img="./img/iphone-1.png"
                        />
                        <Card
                              title="iPhone XR"
                              description="Короткое описание продукта"
                              price={price}
                              img="./img/iphone-1.png"
                        />
                        <Card
                              title="iPhone XR"
                              description="Короткое описание продукта"
                              price={price}
                              img="./img/iphone-1.png"
                        />
                        <Card
                              title="iPhone XR"
                              description="Короткое описание продукта"
                              price={price}
                              img="./img/iphone-1.png"
                        />
                  </div>
            </div>
      );
}

export default Products;
