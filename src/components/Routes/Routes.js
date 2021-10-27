import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Products from '../Products/Products'
import Signup from '../Signup/Signup'

const Routes = ({ products, cartItems, handleAddProducts, handleRemoveProducts, handleClearCartItems }) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products products={products} handleAddProducts={handleAddProducts} />
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/cart" exact>
                    <Cart
                        cartItems={cartItems}
                        handleAddProducts={handleAddProducts}
                        handleRemoveProducts={handleRemoveProducts}
                        handleClearCartItems={handleClearCartItems}
                    />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
