import { useQuery } from "@tanstack/react-query";
import { getRequest } from "auth/FetchInterceptor";

export const getUsersData = async () => {
    return await getRequest(`app/user`);
   
};

export const useGetUserData = () => {
  return useQuery({
    queryKey: ["fetch-users"],
    queryFn: () => getUsersData(),
  });
};


