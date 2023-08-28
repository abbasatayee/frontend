import { notification } from 'antd';
import axios from 'axios';
import { logout, useAuthStore } from 'configs/auth.store';
import { AUTH_TOKEN } from 'constants/AuthConstant';


const unauthorizedCode = [400, 401, 403]
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params:{},
  timeout: 60000
})

service.interceptors.request.use((request)=>{
    if(!request.headers){
        request.headers = {};
    }
	const token = useAuthStore.getState().token;
    if(token){
        request.headers.Authorization = `Bearer ${token}`
    }
    return request;
})

service.interceptors.response.use(
	(response)=>response,
	(error)=>{
		
	let notificationParam = {
		message: ''
	}
	if (unauthorizedCode.includes(error.response.status)) {
		notificationParam.message = 'Authentication Fail'
		notificationParam.description = 'Please login again'
		localStorage.removeItem(AUTH_TOKEN)
		logout();
	}
	if (error.response.status === 404) {
		notificationParam.message = 'Not Found'
	}
	if (error.response.status === 500) {
		notificationParam.message = 'Internal Server Error'
	}
	if (error.response.status === 508) {
		notificationParam.message = 'Time Out'
	}
	if(error?.response?.status === 401){
		logout();
	}
	notification.error(notificationParam)
	return Promise.reject(error);
	
}
	)

export async function getRequest(url,params){
    return  service.get(url,{params}).then(response=>response.data)
}

export async function postRequest(url , params,headers){
    return  service.post(url,params,headers).then(response=>response?.data);
}

export async function deleteRequest(url,params){
    return await service.delete(url,params).then(response=>response.data);
}
export default service