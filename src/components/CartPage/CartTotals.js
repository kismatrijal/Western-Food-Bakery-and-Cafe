import React from 'react';
import {ProductConsumer} from '../../context';

export default function CartTotals()
{
    return <div className="container">
        <div className="row">
            <ProductConsumer>
                {value=>{
                    const{clearCart, cartSubTotal, cartTax,cartTotal}=value;
                    return <div className="col text-title text-center my-4">
                        <button 
                            className="btn btn-outline-danger text-capotalize mb-4" 
                            onClick={clearCart}>
                                 Clear cart
                        </button>
                        <h3>subtotal: <strong> Rs {cartSubTotal} </strong> </h3>
                        <h3>service charge: <strong>Rs {cartTax}</strong>  </h3>
                        <h3>Grand total: <strong>Rs {cartTotal}</strong>   </h3>                        
                    </div>
                }}
            </ProductConsumer>

        </div>

    </div>
}