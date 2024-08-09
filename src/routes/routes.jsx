import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layouts/main/Main";
import { chefLoader } from "../utils/loaders";
import Chef from "../pages/Chef/Chef/Chef";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/chef/:id',
          element: <Chef></Chef>,
          loader: ({params}) => chefLoader(params.id),
        }
      ]
    },
  ]);

export default router;