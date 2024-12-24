import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import userProfileRoute from "./userProfileRoute";

const dashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
     
      ...userProfileRoute,
    ],
  },
];

export default dashboardRoute;
