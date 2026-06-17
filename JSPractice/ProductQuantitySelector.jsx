function ProductQuantitySelector({ stock }) {
  const [productQuantity, setProductQuantity] = React.useState(1);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <button 
      onClick = {() => {
        productQuantity < stock && setProductQuantity(productQuantity+1)
      }}
      disabled = {productQuantity === stock}
      >+</button>

      <p>{productQuantity}</p>

      <button 
      onClick = {() => {
        productQuantity !== 1 && setProductQuantity(productQuantity-1);
      }}
      disabled = {productQuantity === 1}
      >-</button>

    </div>
  )
}


