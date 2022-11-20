import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import pizzaItem from "./assets/pizzas.json";



function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {pizzaItem.map((obj) => (
              <PizzaBlock key={obj.id} {...obj}/> // передали целый объект через спред оператор, ключи объекта указаны в пропсах компонента
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
