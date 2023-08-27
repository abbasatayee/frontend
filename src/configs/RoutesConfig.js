import React from 'react'
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from 'configs/AppConfig'

export const publicRoutes = [
    {
        key: 'login',
        path: `${AUTH_PREFIX_PATH}/login`,
        component: React.lazy(() => import('views/auth-views/authentication/login')),
    },
    {
        key: 'register',
        path: `${AUTH_PREFIX_PATH}/register`,
        component: React.lazy(() => import('views/auth-views/authentication/register')),
    },
    {
        key: 'forgot-password',
        path: `${AUTH_PREFIX_PATH}/forgot-password`,
        component: React.lazy(() => import('views/auth-views/authentication/forgot-password')),
    }
]

export const protectedRoutes = [
    {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/employees`,
        component: React.lazy(() => import('views/app-views/employees/attendance')),
    },
    {
        key: 'employees.salary_transactions',
        path: `${APP_PREFIX_PATH}/employees/salary_transactions`,
        component: React.lazy(() => import('views/app-views/employees/salary_transactions')),
    },
]