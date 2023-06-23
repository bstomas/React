import React from 'react'

function Cart({cartItems}) {
    const CalculateTotal = ({cartItems}) => {
        // Calculate the value here
    }

  return (
    <div>
        <h2>Cart</h2>
        {/* List of items in the cart */}
        <p>Total: {CalculateTotal()}</p>
        {/* Finalize to purchased button */}
    </div>
  )
}

export default Cart