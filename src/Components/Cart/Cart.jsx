import React from 'react'
import './Cart.css'
import { NavLink } from 'react-router-dom'
const Cart = () => {
  return (
      <div className="container">
        <div className="row">
            <div className="col-12 text-center mt-5 cart">
                <img src="https://png.pngtree.com/png-vector/20250116/ourmid/pngtree-cart-empty-vector-png-image_15213170.png" alt="" />
                <h1>Your cart is empty</h1>
               <NavLink to='/waterpurifier'> <button>Continue Shopping</button></NavLink>
            </div>
        </div>
      </div>
  )
}

export default Cart