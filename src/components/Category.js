import Meal from "./Meal";

const Category = ({ name, meals, products, setProducts }) => {
  return (
    <>
      <h2>{name}</h2>
      <div className="meals-container">
        {meals.map((meal, index) => {
          return (
            <Meal
              key={meal.id}
              {...meal}
              products={products}
              setProducts={setProducts}
            />
          ); //key={meal}
        })}
      </div>
    </>
  );
};

export default Category;
