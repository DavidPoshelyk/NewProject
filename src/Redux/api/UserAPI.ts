import axios from "axios";





const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"3d4b3ca3-fea7-46c7-8c79-414b84e12e62"
    }
})
export  const  UserAPI = {
    moreUsers: (page: number, friend?: boolean)=> instance.get(`users?page=${page}&count=10&friend=${friend}`),
    getUsers: ()=> instance.get('users?page=1'),
    getSubscribers: (isFriend: boolean)=> instance.get(`users?page=1&${isFriend&&`friend=${isFriend}`}`),
    unfollowUsers: (id: string)=> instance.delete(`follow/${id}`),
    followUsers: (id: string)=> instance.post(`follow/${id}`),


}