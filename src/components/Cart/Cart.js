import React from 'react'
import './Cart.css'

const Cart = ({ cartItems, handleAddProducts, handleRemoveProducts, handleClearCartItems }) => {

    //Create total price
    const totalPrice = cartItems.reduce((price, item) => price + item.number * item.price, 0)

    return (
        <div className="cart_items">
            <div className="cart_items_header">
                <h2>Cart Item</h2>
            </div>
            <div className="clear_cart">
                {cartItems.length >= 1 && (
                    <button
                        className="clear_cart_btn"
                        onClick={handleClearCartItems}
                    >
                        CLEAR All</button>
                )}
            </div>

            {/* Check card addition*/}
            {cartItems.length === 0 && <h2 className="cart_items_empty">No items here</h2>}

            <div>
                {cartItems.map((item, idx) => (
                    <div key={idx} className="cart_items_list">
                        <img
                            src={item.images}
                            alt={item.name}
                            className="cart_items_img"
                        />
                        <div className="cart_items_name">{item.name}</div>
                        <div className="cart_items_btn">
                            <button
                                className="cart_items_btn_add"
                                onClick={() => handleAddProducts(item)}
                            >+</button>
                            <button
                                className="cart_items_btn_remove"
                                onClick={() => handleRemoveProducts(item)}
                            >-</button>
                        </div>
                        <div className="cart_items_price">
                            {item.number} * ${item.price}
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart_items_total_price_name">
                <p>Total price :</p>
                <div className="total_price">
                    $ {totalPrice}
                </div>
            </div>
        </div>
    )
}

export default Cart
