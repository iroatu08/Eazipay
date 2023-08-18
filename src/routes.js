
import { Home } from "./pages/home"
import { Dashboard } from "./pages/dashboard";
import NotFound from "./pages/NotFound.vue"

  const routes= [
    {
      path: "/",
      component: Home
    },
    {
      path: "/dashboard",
      component: Dashboard
    },
    // {
    //   path: "/employees",
    //   component: <Employees/>
    // },
    // {
    //   path: "/profile",
    //   component: <Profile/>
    // },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ];


export default routes;
