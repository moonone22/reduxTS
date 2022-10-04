import { createSlice , PayloadAction} from "@reduxjs/toolkit";


// state TYPE

interface IMovie{
    adult: boolean
    backdrop_path: string
    genre_ids:[number]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average:number
    vote_count:number
    }

interface IResult{
        page: number,
        results: IMovie[],
        total_pages: number,
        total_results: number,
        }
interface ILOLID{
    accountId: string,
    id: string,
    name: string,
    profileIconId:number,
    puuid:string,
    revisionDate: number,
    summonerLevel: number,
}
    
type initialState = {
    count : number|string
    popular: null | IResult,
    topRate:IResult,
    upComing:IResult,
    loading:boolean,
    
    coin:null | [{
        id: string,
        is_active: true,
        is_new: false,
        name: string,
        rank: number,
        symbol: string,
        type: string,
}],

    detail: null | {
        id: string,
        description:string,
    },

    price:null | {
        quotes:{
            USD:{
                ath_date: string
                ath_price: number
                market_cap:number
                market_cap_change_24h: number
                percent_change_1h: number
                percent_change_1y: number
                percent_change_6h: number
                percent_change_7d: number
                percent_change_12h:number
                percent_change_15m: number
                percent_change_24h: number
                percent_change_30d: number
                percent_change_30m: number
                percent_from_price_ath: number
                price: number
                volume_24h: number
            }
        }
    },
    chage:null|number,
    LOLID:null | ILOLID,
}

const initialState:initialState = {
    count: 0,
    popular:null,
    topRate:{
        page: 0,
        results:[],
        total_pages: 0,
        total_results: 0,
    },
    upComing:{
        page: 0,
        results:[],
        total_pages: 0,
        total_results: 0,
    },
    loading:true,
    coin:null,
    detail:null,
    price:null,
    chage:null,
    LOLID:null,
}

const stateSlice = 
    createSlice({
			name:"slice",
			initialState,
			reducers:{

                                     //가져온 action의 type
                                    //state 안에서 Type이 정해지기떄문에 action을 가져올때 Type을 지정해줘야할까?
                getCount(state,action:PayloadAction<number|string>){
                    state.count = action.payload
                },
                getMovie(state,actoin){
                    state.popular = actoin.payload.popular
                    state.topRate = actoin.payload.topRate
                    state.upComing = actoin.payload.upComing
                    state.coin = actoin.payload.coin
                    state.loading = false
                },
                getDetail(state,action){
                    state.detail = action.payload.coinInfo
                    state.price = action.payload.coinPrice
                    state.chage = action.payload.change
                },
                getLoLID(state,action){
                    state.LOLID  = action.payload.LOLID
                    console.log(action.payload.LOLID)
                }


            },
			})

export default stateSlice
export const reduxActions = stateSlice.actions;