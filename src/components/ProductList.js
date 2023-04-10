import React from 'react'
import Product from './Product.js'

export default function ProductList (props) {
         return (
              props.productListIsAProp.length > 0  ?
              props.productListIsAProp.map ((product,i)=>{
              return <Product 
                        productISAProp={product} 
                        key={i}  
                        incrementQuantity ={props.incrementQuantity}  
                        index={i}
                        decrementQuantity={props.decrementQuantity}
                        removeItem={props.removeItem}/>
        })
        : <h1> No Products Exists in the Card</h1>
    )
}
