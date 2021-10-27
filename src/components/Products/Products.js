import React from 'react'
import './Products.css'
import ProductsList from './ProductsList'

const Products = ({ products, handleAddProducts }) => {

    return (
        <div className="products">
            {products.map((product => (
                <div className="card" key={product.id}>
                    <ProductsList
                        name={product.name}
                        img={product.images}
                        price={product.price}
                        label={product.label}
                    />
                    <div>
                        <button className="products_add_btn" onClick={() => handleAddProducts(product)}>
                            Add Products
                        </button>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default Products
