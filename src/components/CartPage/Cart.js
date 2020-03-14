import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';


export default function Cart()
{
    return (
    <section className="py-5">
        {/**/}
        <div className="container">
            <Title title="your cart items" center/>

        </div>
        {/*Cart columns*/}
        <CartColumns/>

        {/*Cart List*/}
        <CartList/>
        {/*Cart Total*/}
        <CartTotals/>
    </section>
    );
}