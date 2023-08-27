import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  // {
  //   key: "dashboards",
  //   path: `${APP_PREFIX_PATH}/dashboards`,
  //   title: "sidenav.dashboard",
  //   icon: DashboardOutlined,
  //   breadcrumb: false,
  //   isGroupTitle: true,
  //   submenu: [
  //     {
  //       key: "dashboards-default",
  //       path: `${APP_PREFIX_PATH}/dashboards/default`,
  //       title: "sidenav.dashboard.default",
  //       icon: DashboardOutlined,
  //       breadcrumb: false,
  //       submenu: [],
  //     },
     
  //   ],
  // },
  {
    key: "employees",
    path: `${APP_PREFIX_PATH}/employees`,
    title: "sidenav.employees",
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "employees-attendance",
        path: `${APP_PREFIX_PATH}/employees/attendance`,
        title: "sidenav.employees.attendance",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "employees-salary_transactions",
        path: `${APP_PREFIX_PATH}/employees/salary_transactions`,
        title: "sidenav.employees.salary_transactions",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
     
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
