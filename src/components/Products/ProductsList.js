import React, { useState } from 'react'
import './Products.css'
import ReactCardFlip from 'react-card-flip';

const ProductsList = ({ name, img, price, label }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    //Function flip-effect
    function handleClick() {
        setIsFlipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front side */}
            <div>
                <button
                    className="flip_btn"
                    onClick={handleClick}
                >Detail
                </button>
                <div>
                    <img
                        className="product_img"
                        src={img}
                        alt={name} />
                </div>
                <div>
                    <h2 className="products_name">
                        {name}
                    </h2>
                </div>
                <div className="products_price">
                    <h3>{price}$</h3>
                </div>
            </div>
            {/* Back side */}
            <div className="card_back_side">
                <div>
                    <button
                        className="btn_flip_back"
                        onClick={handleClick}
                    >Flip Back
                    </button>
                </div>
                <div className="card_back_side_text">
                    <h2>{label}</h2>
                </div>
            </div>
        </ReactCardFlip>
    )
}
export default ProductsList
