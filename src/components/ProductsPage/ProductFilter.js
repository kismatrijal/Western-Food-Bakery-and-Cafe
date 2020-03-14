import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../../context/context';

export default function ProductFilter(){
    return <ProductConsumer>
        {value=>{
            const{search, min, max,productItem,handleChange,price,storeProducts}=value;

            let productItems= new Set()
            productItems.add('All');
            for(let product in storeProducts){
                productItems.add(storeProducts[product]["productItem"])
            }
            productItems=[...productItems];
            console.log(productItems)
            
            return(
                <div className="row my-5">
                    <div className="col-10 mx-auto">
                        <FilterWrapper>
                            {/*text search */}
                            <div>
                                <label htmlFor="search">Search Products</label>
                                <input 
                                type="text" 
                                name="search" 
                                id="search" 
                                onChange={handleChange} 
                                value={search} 
                                className="filter-item"
                                />
                            </div>
                            {/*end of text search */}
                            {/*Category search */}
                            <div>
                                <label htmlFor="productItem">Choose Products </label>
                                <select 
                                name="productItem" 
                                id="productItem" 
                                className="filter-item" 
                                onChange={handleChange}
                                value={productItem}
                                >
                                    {
                                        productItems.map((productItem,index)=>{
                                        return (
                                        <option key={index} value={productItem}>
                                            {productItem}
                                        </option>
                                        );
                                        })
                                    }
                                </select>
                            </div>
                            {/*End of Category search */}
                            {/*Price Range */}
                            <div >
                                <label htmlFor="price">
                                    <p className="mb-2">Product price : <span>${price}</span></p>                                    
                                </label>
                                <input 
                                type="range" 
                                name="price" 
                                id="price" 
                                min={min} 
                                max={max}
                                className="filter-price" 
                                value={price}
                                onChange={handleChange}
                                />
                            </div>

                            {/*End of Price Range */}


                        </FilterWrapper>

                    </div>

                </div>
            );
        }}
    </ProductConsumer>
}

const FilterWrapper = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
grid-column-gap: 2rem;
grid-row-gap: 1rem;
label{
    font-weight: bold;
    text-transform: capitalize;
}
.filter-item,
.filter-price{
    display:block;
    width:100%;
    background:transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGray);
}

`;