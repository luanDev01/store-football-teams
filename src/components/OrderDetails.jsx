import React from 'react'

const OrderDetails = ({details}) => {

    let totalPrice = 0

    details.forEach((e) => {
        totalPrice += e.quantity * e.price
    })

  return (
    <>
    <section className="summary">
        <strong>Order Details</strong>
        
            <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>

            {details.map((e)=>(
                <tr>
                    <td>{e.quantity}x {e.name}</td>
                    <td>$ {e.price}</td>
                </tr>
            ))}
                
                <tr>
                    <th>Total</th>
                    <th>$ {totalPrice.toFixed(2)}</th>
                </tr>
            </tbody>
        </table>
        
    </section>
    </>
  )
}

export default OrderDetails