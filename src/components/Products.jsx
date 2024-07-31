import React from 'react'

const Products = ({product, handleQuantity, itemSelect}) => {

  return (
    <>
    <div onClick={(e)=> itemSelect(e,product.id)} className={`product ${product.isInBag ? 'selected' : ''}`}>
        <div className="photo">
            <img src={`././img/${product.photo}`} />
        </div>
        <div className="description">
            <span className="name">{product.name}</span>
            <span className="price">$ {product.price}</span>

            {product.isInBag &&
          <div className="quantity-area">
            <button disabled={product.quantity == 1} onClick={(e)=> handleQuantity(e, product.id, -1)}>-</button>
            <span className="quantity">{product.quantity}</span>
            <button onClick={(e)=> handleQuantity(e, product.id, +1)}>+</button>
          </div> }
            
        </div>
    </div>
    </>
  )
}

export default Products