import React from 'react';
import Title from '../Title';

export default function Contact(){
    return <section className="py-5"> 
    <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contact us"/>
            <form className="mt-5" action="https://formspree.io/kismatrijal@gmail.com" method="POST">
                <div className="form-group" >
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Full Name"
                        className ="form-control"
                    />

                </div>

                <div className="form-group" >
                    <input
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                        className ="form-control"
                    />

                </div>
                <div className="form-group" >
                    <input
                        type="text"
                        name="subject"
                        placeholder="subject -- important !!!"
                        className ="form-control"
                    />

                </div>
                <div className="form" >
                        <textarea 
                        className="form-control"
                        rows="8"
                        placeholder="Leave your message here.."
                        name="message"/>
                </div>
                <div className="form-group mt-3">
                    <input type="submit" value="Send"
                    className="form-control bg-secondary"/>

                </div>

            </form>
        </div>

    </div>

    </section>
}