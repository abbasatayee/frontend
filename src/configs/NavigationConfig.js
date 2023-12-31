import { DashboardOutlined,  FieldTimeOutlined,  MoneyCollectFilled,  MoneyCollectTwoTone,  UserAddOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "sidenav.dashboard",
    icon: DashboardOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: "dashboards-default",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "sidenav.dashboard.default",
        icon: DashboardOutlined,
        breadcrumb: true,
        submenu: [],
      },
     
    ],
  },
  {
    key: "employees",
    path: `${APP_PREFIX_PATH}/employees`,
    title: "sidenav.employees",
    icon: UserAddOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: "employees-allEmployees",
        path: `${APP_PREFIX_PATH}/employees/allEmployees`,
        title: "sidenav.employees.allEmployees",
        icon: FieldTimeOutlined,
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "employees-salary_transactions",
        path: `${APP_PREFIX_PATH}/employees/salary_transactions`,
        title: "sidenav.employees.salary_transactions",
        icon: MoneyCollectFilled,
        breadcrumb: true,
        submenu: [],
      },
     
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
