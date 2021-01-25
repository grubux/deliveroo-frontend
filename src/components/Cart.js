const Cart = ({ products, setProducts }) => {
  //total
  let soustotal = 0;
  for (let i = 0; i < products.length; i++) {
    soustotal = soustotal + Number(products[i].price) * products[i].quantity;
  }

  const fraisDeLivraison = 2.5;

  let absoluteTotal = soustotal + Number(fraisDeLivraison);
  soustotal = soustotal.toFixed(2);
  absoluteTotal = absoluteTotal.toFixed(2);

  return (
    <div className="cart">
      <button className={products[0] ? "valider" : "cart-button-empty"}>
        Valider mon panier
      </button>

      <div>
        <div
          className={products[0] ? "cart-middle-section-full" : "cart-empty"}
        >
          {products[0] ? null : <div>Votre panier est vide</div>}
          {products.map((product, index) => {
            const handlePlusClick = () => {
              const newProduct = [...products];
              newProduct[index].quantity++;
              setProducts(newProduct);
            };

            const handleMinusClick = () => {
              const newProduct = [...products];
              if (newProduct[index].quantity === 1) {
                newProduct.splice(index, 1);
              } else {
                newProduct[index].quantity--;
              }
              setProducts(newProduct);
            };

            //Linetotal
            let productTotal = 0;
            productTotal =
              Number(products[index].price) * products[index].quantity;
            productTotal = productTotal.toFixed(2);

            return (
              <div className="product-global">
                <div className="product-line-main-container">
                  <div className="product-buttons">
                    <img
                      className="button-minus"
                      onClick={handleMinusClick}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAABmJLR0QA/wD/AP+gvaeTAAACW0lEQVQ4ja2V32/SUBTHzwVaGMIoCWQTMHsAM+XJMJw+GU30VebfYOKzxjH8C/aCf4L/gq572tQ0/ngDVxIfBB3NkrlWtxWkFATbQu8eyhhlnXaG71N77r2f++2955wijDFMQo6JUADAZRlVsU5LNVoSS90WryoAECPdqSn/EhVeokIkstgenf60V5KYFbgdpTtLkLd9wQjhBoAfmvK+3djX1Lh7Kh9NPKDC4yQ8oj7Ws3wVWGahUnzdrPexPja62aynKkVgmRWeGxs1gZb5KrDMo92Kppsmjaqn6zmeA5bJ8Zw16GXjEFjmyd72WYhRPd7bBpZZaxwOI4MzUrF+tVwIOl2F+bQToX/eUR/jxW9bcr9XTt4kEILh9dNSbUfprkbidigA4ERoNRLnlO56UzQiA9CaJM4Q5N3poB2KoXvTwVmCpKWaCVTqtO74gg6wZed4Jbrlo7Y6svE6SMifPSVKhoaTHu5WvquK5fo50vNi7orxHCM8G3Ld5GhM6DzWTI4uutzCiIXhnn8Xr/0x8v7EUfqC/127ocM5OoEO+GNbWvROm0CZQPhAU9/KDfugN/KvfU29Tw1O9iQhk+VCwOkqzKddNlKph/H1r59+6/qX5A1TQpLIkY8mSp3WssDZsfNUqH7utp/HEsRw19EKyh4XrWqjaJ8JZxQtxriP9RWeA5ZJVYqbVm1ko1m7Vi4glsmdaiMWjY2WxKzAcUp3ZtDYSAAQNOVDWzrQ1Mtubz6WyARCY6ssQACgYbzeFGmpxnZko9VeIj0LXn+GCmUCYcLqNqxB/6GJ/UWOAOh4BzORQxvKAAAAAElFTkSuQmCC"
                      alt="icon-minus"
                    />

                    {product.quantity}
                    <img
                      className="button-plus"
                      onClick={handlePlusClick}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAABmJLR0QA/wD/AP+gvaeTAAAChElEQVQ4ja2VXU/TUBjHn8PWdpvAuqQLCCjRQVCvyCDEKyOJ3Dr8DCbGK18Sx9QPwA0fwBu/gtBdgZLGl7sRinqzOVZIgBZhHbYby2bbrceLbnPtigGz/9U5zzn9nee0z/8pwhhDN9TTFQoAeF2jOjZZtcCq8lb1VNQ1ABghqai/b54Oz9MMiVyOR51XW1bluCTsatVBgrzbGxoiKAA4NLRPZeXI0COUf2l47AEddpJwm+rYjIs54LmpzMb74kkdm47VteJJNLMBPLcgCo5VG+iFmAOee7SXMUzbpnbVTDMhCsBzCVFwB71T8sBzzw+2z0K069nBNvDcipJvRRrvSMfmzXQq5PGmJqY9CLXf/fF+FgG8uTrRHqxjPJPdLNVr6Vu3CYSg9flZtbCrVReHIg4KAGS1yg+t4gh6EFocighaNVmUrUgDtKLKAwR5rz/kWg2umusPDRIkqxZsoK3K6WxvqAec6fxDPYDu9NKblZI1bRTkz5o2TDKtTQ/3Mvu6Zo2/V04BYC73zZqOkr63ozes8QjhWy2d2DJyCF0kNVtGl72U1EwBAFpnAsBs7isArI9Pdj4sGr+tuv+b0fSlvo9lxYQLdAIT8JeyOhPot4FiwfCxoa+XlPODPpR+HRn6fZqxgeZpJkL5Xx/u1Do8fI30XSd9jmAN41fSzjgViAWb7m3V+LKSB557ej6LPDnIIp5LqrKL1zDG8aZp9XOY9qV0hmkxxnVsLogC8Fw0s7Hm1kZWi4XJdArxXKKjjbg0NlaV45IgaNWBRmMjAUAytM9l9djQx6nA0shYLMg4nnIBAYCBcbIos2qBr5SsVnuF9E0F+mI0EwuGiQ5jnwn6D3XtL/IH479IS4PebtAAAAAASUVORK5CYII="
                      alt="icon-plus"
                    />
                  </div>
                  <div className="product-title">{product.title}</div>
                  <div className="product-price">{productTotal} €</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {products[0] ? (
        <div className="cart-bottom-section">
          <div className="result-line">
            <div className="under-total-group">
              <div className="totals-line-main-container">
                <div>Sous-total</div>
                <div>{soustotal} €</div>
              </div>
              <div className="totals-line-main-container">
                <div>Frais de livraison</div>
                <div>{fraisDeLivraison} €</div>
              </div>
            </div>
            <div className="absolute-totals-line-main-container">
              <div>Total</div>
              <div>{absoluteTotal} €</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
