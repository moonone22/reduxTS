import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { movieAction } from '../redux/action/action';
//import { useDispatch, useSelector } from 'react-redux'
import { reduxActions } from '../redux/reduce/reducer';
import { RootState } from '../redux/store';

const Home = () => {

    const dispatch = useAppDispatch();
    const a = useAppSelector(state=>state.state1.count)
    const b = useAppSelector(state=>state.state1.popular)
    const loading = useAppSelector(state=>state.state1.loading)
    const coin = useAppSelector(state=>state.state1.coin)
    const [count,setCount] = useState(0)
    const navigate = useNavigate()
    const [LOLID,setLOLID] = useState("")
   

    const clickadd = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(reduxActions.getCount(count))
        setCount(0)
    }
    const clickLoL = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      dispatch(movieAction.getLolId(LOLID))
      navigate(`/loldetail/${LOLID}`)
  }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCount(+e.target.value)
      };

    const onFindID = (e: React.ChangeEvent<HTMLInputElement>) => {
          setLOLID(e.target.value)
          
    }

    

    useEffect(()=>{
        dispatch(movieAction.getMovies()) 
    },[])

    const goToDetail = (id:string) => {
        navigate(`/movies/${id}`)
       }



  if(loading){
    return<h1>로딩중</h1>
  }
  return (
    <div>
        <h1>{a}</h1>
        <form onSubmit={clickadd}>
            <input onChange={onChange} type="number" value={count}/>
            <button >클릭</button>
        </form>

        <br/>

        <h1>INPUT 입력</h1>
        <form onSubmit={clickLoL}>
            <input onChange={onFindID} type="string"/>
            <button >클릭</button>
        </form>

        <br/>

        <h1>TMDB API 영화제목</h1>
        <h1>{b?.results[0].title}</h1>
        
        <br/>

        <h1>코인</h1>
        <div>{coin===null 
        ? null 
        : coin.map((item,index)=> <h1 key={index} onClick={()=> goToDetail(item.id)}> {item.name} </h1>)}</div>
    </div>
  )
}

export default Home