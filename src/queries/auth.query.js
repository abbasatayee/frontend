import { useMutation } from "@tanstack/react-query"
import { postRequest } from "auth/FetchInterceptor";


export const authenticateUser = async (email, password) => {
    return postRequest(`auth/login`,{
      email,
      password
    })
  };
export const useLoginUsers = ()=>
{
    return useMutation({
        mutationFn:(params)=>authenticateUser(params?.email,params?.password)})
}