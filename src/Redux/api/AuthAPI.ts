import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",


})
export  const  AuthAPI = {
    authData:()=>{return instance.get<ResponseType<{id:number, email:string, login:string}>>(`auth/me`)},
    authPost:(email:string, password:string, rememberMe:boolean)=>{return instance.post<{userId:number},AxiosResponse<ResponseType<{userId:number}>>>(`auth/login`,{email, password, rememberMe})},
    authDelete:()=>{return instance.delete<authDeleteType>(`auth/login`)},

}

export interface ResponseType<D = {}> {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
type authDeleteType = Omit<ResponseType, 'fieldsErrors'>
