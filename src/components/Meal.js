import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({
  id,
  title,
  price,
  description,
  popular,
  picture,
  products,
  setProducts,
}) => {
  const handleClick = () => {
    const newProducts = [...products];

    let isFound = false;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        newProducts[i].quantity++;
        isFound = true;
        break;
      }
    }

    if (isFound === false) {
      newProducts.push({
        title: title,
        price: price,
        quantity: 1,
        id: id,
      });
    }
    setProducts(newProducts);
    console.log(products);
  };

  return (
    <div onClick={handleClick} className="meal-container">
      <div className="meal-infos">
        <div key={id}>
          <p className="menu-title">{title}</p>
        </div>
        {description && description.length > 0 && (
          <p className="meal-infos-descriptions">{description}</p>
        )}

        <div className="menu-item">
          <span className="MenuItem--price">
            {Number(price).toFixed(2).replace(".", ",")} €
          </span>

          {popular && (
            <span className="MenuItem--popular">
              <FontAwesomeIcon
                icon="star"
                size={20}
                style={{ marginRight: 5 }}
              />{" "}
              Populaire
            </span>
          )}
        </div>
      </div>

      {picture && (
        <div className="MenuItem--picture">
          <img src={picture} alt="menu picture" />
        </div>
      )}
    </div>
  );
};

export default Meal;
