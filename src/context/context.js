import React, {Component} from 'react';
import {socialData} from './socialData';

const ProductContext = React.createContext();
//provider
//consumer
class ProductProvider extends Component{
    state={
        cartOpen:true,
        cartItems:0,
        cart:[],
        socialIcons: socialData
    }
//handling Cart
    handleCart=()=>{
    this.setState({cartOpen: !this.state.cartOpen})
    };
//Closing cart
    closeCart=()=>{
    this.setState({cartOpen: false})
    }
//Opening Cart
openCart=()=>{
    this.setState({cartOpen:true})
}

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleCart:this.handleCart,
                closeCart: this.closeCart,
                openCart:this.openCart

            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};