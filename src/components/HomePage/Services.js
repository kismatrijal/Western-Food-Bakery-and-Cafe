import React, { Component } from 'react';
import styled from 'styled-components';
import {FaDolly,FaRedo,FaDollarSign} from 'react-icons/fa'

class Services extends Component {
    state={
        Services:[
            {
                id:1,
                icon:<FaDolly/>,
                title: "free home delivery",
                text:   "Order food and cake online from western food bakery & cafe in Kathmandu, fast delivery straight to your home or office."
            },
            {
                id:2,
                icon:<FaRedo/>,
                title: "No return policy",
                text:   "Order food and cake online from western food bakery & cafe in Kathmandu, fast delivery straight to your home or office."
            },
            {
                id:3,
                icon:<FaDollarSign/>,
                title: "cash on delivery",
                text:   "Order food and cake online from western food bakery & cafe in Kathmandu, fast delivery straight to your home or office."
            }
        ]
    }
    render() {
        return <ServicesWrapper className="py-5">
            <div className="container">
                <div className="row">
                    {this.state.Services.map(item=>{
                        return(
                            <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                                <div className="service-icon"> 
                                {item.icon}

                                </div>
                                <div className="mt-3 text-capitalize">
                                    {item.title}

                                </div>
                                <div className="mt-3">{item.text} </div>
                            </div>
                        )
                    })}

                </div>

            </div>

        </ServicesWrapper>
    }
}

export default Services;

const ServicesWrapper = styled.section`
background: rgba(95,183,234,0.5);
.service-icon{
    font-size:2.5rem;
    color:var(--primaryColor);
}
p{
    color:var(--darkGrey);
}
`;