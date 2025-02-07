import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../features/public/components/PublicLayout";

import { PublicLayout as PublicLayoutMM  } from "../features/public/components/PublicLayout.mm";


import publicRoute from "./publicRoute";
import {publicRoute as publicRouteMM} from "./publicRoute.mm";

import NotFound from "../features/public/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [...publicRoute],
    errorElement: <NotFound />,
  },
  {
    path: "/mm",
    element: <PublicLayoutMM />,
    children: [...publicRouteMM],
    errorElement: <NotFound />,
  }
]);

export default router;
