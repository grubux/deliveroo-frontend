import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faHome } from "@fortawesome/free-solid-svg-icons";

import "./reset.css";
import "./App.css";
import Logo from "./assets/images/logo.png";
import Category from "./components/Category";
import Cart from "./components/Cart";
library.add(faStar, faHome);
<script
  src="https://kit.fontawesome.com/f4e8164473.js"
  crossorigin="anonymous"
></script>;

const App = () => {
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://grubux-deliveroo-backend.herokuapp.com/"
      );
      const data = await response.json();

      setRestaurant(data.restaurant);
      setCategories(data.categories);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://grubux-deliveroo-backend.herokuapp.com/"
  //     );
  //     setData(response.data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // console.log(data);

  return (
    <>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          <div className="header ">
            <div className="wrapper">
              <img src={Logo} alt="Logo" className="logo" />
            </div>
          </div>
          <div className="wrapper">
            <div className="restaurant-info">
              <div className="header-text">
                <h1>{restaurant.name}</h1>
                <p>{restaurant.description}</p>
              </div>

              <img src={restaurant.picture} alt={restaurant.name} />
            </div>
          </div>

          <div className="grey-back">
            <div className="wrapper">
              <div className="restaurant-details">
                <div className="meals">
                  {categories.map((category, index) => {
                    if (category.meals.length === 0) {
                      return null;
                    }

                    return (
                      <Category
                        key={index}
                        {...category}
                        products={products}
                        setProducts={setProducts}
                      />
                    );
                  })}
                </div>
                <div>
                  <Cart products={products} setProducts={setProducts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default App;
