import axios from "axios"
import axiosInstance from "./axiosInterceptor"
const URL:any = process.env.NEXT_PUBLIC_MATCH_CARD_API

export const GetMatchCardAPI = async()=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches`)
        return  response?.data 
    } catch (error) {
        console.log('error: ', error);
    }
}

export const GetNewsAPI = async()=>{
    try {
        let response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=10308ea6f51d479491f051fdd598aa9b')
        return  response?.data?.articles 
    } catch (error) {
        console.log('error: ', error);
    }
}
