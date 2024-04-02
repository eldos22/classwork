import React from 'react'
import { useSelector } from 'react-redux'

export default function Products() {
    const {products} = useSelector((state)=> state.products)
  return (
    <div>
        {products.map(product => <div key={product.id}>{product.title} {product.completed}</div>)}
    </div>
  )
}
