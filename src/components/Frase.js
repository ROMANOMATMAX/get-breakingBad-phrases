import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    
    @media (min-width: 992px) {
        margin-top: 3rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -3rem;
            top: -2rem;

        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        tex-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frase = ({frase}) => {
    if(Object.keys(frase).length === 0) return null;
    const {quote, author} = frase;
    return (
        <ContenedorFrase>
            <h1>{quote}</h1>
            <p>{author}</p>
        </ContenedorFrase>
     );
}
 
export default Frase;