import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getRequest, postRequest } from "auth/FetchInterceptor"



export const employeeCreate = (params)=>{
    return postRequest(`app/employees`,params);
}
export const useEmployeeCreate = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(params)=>employeeCreate(params),
        onSuccess:()=>{
            queryClient.invalidateQueries(
                {
                    queryKey:'fetch-employees',
                    
                }
            );
        }
    })
}
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