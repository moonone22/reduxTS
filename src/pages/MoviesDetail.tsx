import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { movieAction } from '../redux/action/action';


const Container = styled.div`
    padding: 0 20px ;
    max-width: 480px ;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh ;
    display:flex ;
    justify-content: center ;
    align-items: center ;
    margin-bottom:50px ;
`;
const Title = styled.h1`
        font-size: 48px;
        color:${(props) => props.theme.accentColor};
`;
const Loder = styled.span`
        text-align:center;
        display: block ;
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
 
`;
const Tab = styled.span<{isActive : boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: ${props => props.isActive ? "#17d9d3" :props.theme.textColor};
  
  a{
    display: block ;
    padding: 15px 0px;
    
  }
`;

const Home = styled.div`
  position:fixed ;
  font-size: 50px;
  font-weight: 800;
  left:30px ;
  top:80px ;
`;



const MoviesDetail = () => {

const {id} = useParams();
const dispatch = useAppDispatch()
const detail = useAppSelector(state=>state.state1.detail)
const price = useAppSelector(state=>state.state1.price)
const chage = useAppSelector(state=>state.state1.chage)


useEffect(()=>{
  dispatch(movieAction.getCoinDetail(id))
},[id])

const money = Math.imul(
  price?.quotes.USD.price.toFixed(0)  as unknown as number,
  chage?.toFixed(0) as unknown as number,
).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 

  return (
    <Home>
        <Title>{id}</Title>
        
        <h4>{detail?.description}</h4>
        <p>{money}</p>
        <p>{price?.quotes.USD.ath_price}</p>
    </Home>
    
  )
}

export default MoviesDetail