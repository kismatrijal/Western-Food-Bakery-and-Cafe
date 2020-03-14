import React from 'react';
import {FaChevronCircleUp,FaChevronCircleDown, FaTrash} from 'react-icons/fa';

export default function CartItem({
    cartItem,
    increment,
    decrement,
    removeItem}){
    const{id, title,price,count,total,image}=cartItem;
    return <div className="row mt-5 mt-lg-0 text-capitalize text-center align-tems-center">
         {/* image*/}
         <div className="col-10 mx-auto col-lg-2 pb-2">
             <img src={image} width="60" alt="product" className="image-fluid"></img>
         </div>
         {/*end of image */}

         {/* title*/}
         <div className="col-10 mx-auto col-lg-2 pb-2">
            <span className="d-lg-none ">Product : </span>{title}
         </div>
         {/*end of title */}

         {/*price*/}
         <div className="col-10 mx-auto col-lg-2 pb-2">
            <span className="d-lg-none ">Price : Rs </span>{price}
         </div>
         {/*end of price */}

         {/*count control */}
         <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
             <div className="d-flex justify-content-center">
                 <div>
                     <FaChevronCircleDown 
                        onClick={()=> decrement(id)} 
                        className="cart-icon text-primary"
                     />
                     <span className="text-title text-muted mx-3">{count}</span>
                     <FaChevronCircleUp 
                        onClick={()=> increment(id)} 
                        className="cart-icon text-primary"
                     />
                 </div>

             </div>
         </div>
         {/*end of count control */}

         {/*remove item*/}
         <div className="col-10 mx-auto col-lg-2">
            <FaTrash className="text-danger cart-icon" 
            onClick={()=> removeItem(id)}
            />
         </div>
         {/*end of remove item */}
         
         {/*Total*/}
         <div className="col-10 mx-auto col-lg-2">
    <strong className="text-muted"> item total : Rs {total}</strong>
         </div>
         {/*end of total */}
         

    </div>
}