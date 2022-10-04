import axios from "axios";
import { reduxActions } from "../reduce/reducer";



const API_KEY = "8b09806be78555cf2fc1487d7035e77a"
const LOL_KEY = "RGAPI-ee0d21b8-6bb0-4ac8-a65f-f58de2fb83bf"

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{"Content-type":"application/json"},
})

function getMovies(){
    return async (dispatch:any) => {
        const popularMovieApi =  api.get(`/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)

        const topRateApi =  api.get(`/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`)

        const upComingApi =  api.get(`/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`)

        const resApi =  axios("https://api.coinpaprika.com/v1/coins")

        
        
        let [popular,topRate,upComing,coin]= await Promise.all([popularMovieApi,topRateApi,upComingApi,resApi]) 

        dispatch(reduxActions.getMovie({
                popular:popular.data,
                topRate:topRate.data,
                upComing:upComing.data,
                coin:coin.data.slice(0,50)
            }))
    }
    
}

function getCoinDetail(coinId:string | undefined){
    return async(dispatch:any) =>{
        const coinInfoApi =  axios(`https://api.coinpaprika.com/v1/coins/${coinId}`)
        const coinPriceApi =  axios(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
        const chageApi = axios("https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD")
        let [coinInfoData,coinPriceData,change]= await Promise.all([coinInfoApi,coinPriceApi,chageApi]) 
   
        dispatch(reduxActions.getDetail({
            coinInfo : coinInfoData.data,
            coinPrice : coinPriceData.data,
            change : change.data[0].basePrice,
        }))
}

}


function getLolId(name:string){ 
    
    return async(dispatch:any) =>{
        const lolApi = await axios(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${LOL_KEY}`)
        
        dispatch(reduxActions.getLoLID({
            LOLID : lolApi.data,
        }))
}
}


export const movieAction={
    getMovies,getCoinDetail,getLolId
}