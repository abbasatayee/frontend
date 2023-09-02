import { useQuery } from "@tanstack/react-query"
import { getRequest } from "auth/FetchInterceptor"

export const getEmployeesData = async(current,pageSize)=>{
    return await getRequest('app/employees',{
        page:current,
        per_page:pageSize
    })
}
export const useGetEmployeesData = (current,pageSize)=>{
    return useQuery({
        queryKey:['fetch-employees',current,pageSize],
        queryFn:()=>getEmployeesData(current,pageSize)
    })
}