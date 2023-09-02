import { useQuery } from "@tanstack/react-query";
import { getRequest } from "auth/FetchInterceptor";

export const getUsersData = async (current,pageSize) => {
    return await getRequest(`app/user`,{
      page:current,per_page:pageSize
    });
   
};

export const useGetUserData = (current,pageSize) => {
  return useQuery({
    queryKey: ["fetch-users",current,pageSize,],
    queryFn: () => getUsersData(current, pageSize),
  });
};


