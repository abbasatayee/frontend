import { postRequest } from "../utils/http"
import { useMutation } from "@tanstack/react-query"
export const authenticate = async(email,password)=>{
  return  postRequest(`login`,{
        email,
        password
    })
}
export const useLogin = ()=>{
    return useMutation({
        mutationFn:(params)=>authenticate(params?.email,params?.password)
    })
}