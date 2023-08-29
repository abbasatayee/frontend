import { useMutation, useQuery } from "@tanstack/react-query"
import { getRequest, postRequest } from "auth/FetchInterceptor";


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

export const getAuthUserData =async ()=>{
  return await getRequest(`auth/authenticated-user-data`);
}
export const useGetAuthUserData = ()=>{
  return useQuery({
    queryKey:['fetch-AuthUser'],
    queryFn:()=>getAuthUserData()
  })
}