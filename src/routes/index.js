
import PrivateRoutes from "../components/admins/privateRoutes";
import CheckRoutes from "../components/admins/checkRoutes";
import LayoutMainAdmin from "../layouts/admins";
import LayoutMainClient from "../layouts/clients";
import AddCategories from "../pages/admins/addCategories";
import DashBoard from "../pages/admins/dashboard";
import LoginAdmin from "../pages/admins/login";
import ManagementCategories from "../pages/admins/managementCategories";
import Home from "../pages/clients/home/index";
import AddGroupPermission from "../pages/admins/addGroupPermission";
import ManagementGroupPermission from "../pages/admins/managementGroupPermission";
import SetPermission from "../pages/admins/setPermission";
import AddJobs from "../pages/admins/addJobs";



export const routes = [
  //client
  {
    path: "/",
    element: <LayoutMainClient />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
  //admin
  {
    path: "admin",
    element: <LayoutMainAdmin />,
    children: [
      {
        element: <CheckRoutes />,
        children: [
          {
            path: "login",
            element: <LoginAdmin />,
          }
        ]
      },

      {
        element: <PrivateRoutes />,
        children: [
          {
            index: true,
            element: <DashBoard />,
          },
          //Danh mục công việc
          {
            path: "add-categories",
            element: <AddCategories />
          },
          {
            path: "management-categories",
            element: <ManagementCategories />
          },
          //Quản lý công việc
          {
            path: "add-jobs",
            element: <AddJobs />
          },
          {
            path: "management-jobs",
            element: <ManagementCategories />
          },
          //Quyền
          {
            path: "add-group-permission",
            element: <AddGroupPermission />
          },
          {
            path: "management-group-permission",
            element: <ManagementGroupPermission />
          },
          {
            path: "set-permission",
            element: <SetPermission />
          }

        ]
      },

    ],
  }
];
