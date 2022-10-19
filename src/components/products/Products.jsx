import Card from "./card/Card";
import style from "./products.module.css"

function Products(props) {
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
        {
          props.items.map(obj => {
            return (
              <Card
                key={obj.id}
                title={obj.title}
                description={obj.description}
                price={obj.price}
                img={obj.img}
                // onClickPlus={
                //   () => {
                //     alert("Вы выбрали товар: " + obj.title)
                //   }
                // }
                // onClickFavorite={
                //   () => {
                //     alert("Вы добавили в избранное товар: " + obj.title)
                //   }
                // }
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default Products;
