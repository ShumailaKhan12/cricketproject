import axiosInstance from "./axiosInterceptor"
const URL:any = process.env.NEXT_PUBLIC_MATCH_CARD_API
console.log('URL: ', URL);

export const GetMatchCardAPI = async()=>{
    try {
        let response = await axiosInstance.get(`${URL}/matches`)
        return  response?.data 
    } catch (error) {
        console.log('error: ', error);
    }
}
