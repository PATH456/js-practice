function ShoppingCart() {
  const initialProducts = [
    { id: 1, name: "Keyboard", price: 80 },
    { id: 2, name: "Mouse", price: 40 },
    { id: 3, name: "Monitor", price: 300 }
  ]
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <>
    <h1>Available Products</h1>
    {initialProducts.map((product) => {
      return (
        <p key = {product.id}>
          {product.name} - ${product.price} 
          <button onClick = {() => addToCart(product)}>
            Add to cart
          </button>
        </p>
      )
    })}

    <h2>Shopping Cart</h2>

    {cartItems.map((item) => {
      return (
        <p key = {item.id}>
          {item.name} - ${item.price} x {item.quantity}
          </p>
      )
    })}

    </>
  )

  function addToCart(product) {
    const productAlreadyInCart = cartItems.find((item) => item.id === product.id);

    if (productAlreadyInCart) {
      setCartItems(cartItems.map((item) => {
        if (item.id === product.id) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      }));

    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  }
}

