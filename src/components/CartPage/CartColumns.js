import React from 'react';

export default function CartColumns()
{
    return(
        <div className="container-fluid text-center d-none d-lg-block my-5">
            <div className="row">
                {/*Single column*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">products</p>
                </div>
                {/*end of single column*/}

                {/*Single column*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">Name of Product</p>
                </div>
                {/*end of single column*/}

                {/*Single column*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                {/*end of single column*/}

                {/*Single column*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                {/*end of single column*/}

                {/*Single column*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                {/*end of single column*/}

                {/*Single column*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
                {/*end of single column*/}
                
            </div>
        </div>
    );
}