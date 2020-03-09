import React from 'react';
import styled from 'styled-components';

export default function Title({title, center}){
    return <TitileWrapper className="row" center={center}>
                <div className="col">
                    <h2 className="text-title" >{title} </h2>
                    <div className="title-underline" ></div>
                </div>
        </TitileWrapper>
}

const TitileWrapper = styled.div`
text-align: ${props=>(props.center ? "center" : "left")};
.title-underline{
    height: 0.25rem;
    width:7rem;
    background: #5fb7ea;
    margin: ${props=>(props.center)?"0 auto":"0"}


}

`;