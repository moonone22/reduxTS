import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
        font-size: 48px;
`;



const LolDtail = () => {
    const {id} = useParams();
    
  return (
    <div>
        <Title>{id}</Title>
    </div>
  )
}

export default LolDtail