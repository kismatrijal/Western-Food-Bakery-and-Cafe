import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

export default function Info(){
    return(
       <section className="py-5">
           <div className="container">
               <div className="row">
                   <div className="col-10 mx-auto col-md-6 my-3">
                       <img 
                       src={aboutBcg} 
                       className="img-fluid img-thumbnail" 
                       alt="about western food" 
                       style={{background:"var(--darkGray)"}}
                       />
                   </div>
                   <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us" />
                        <p className="text-lead text-muted my-3"> Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations  </p>
                        <p className="text-lead text-muted my-3"> Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations  </p>
                        <botton className="main-link" type="button" style={{marginTop:"2rem"}}> More info</botton>
                   </div>                   
               </div>
           </div>          
       </section>
    );
}
