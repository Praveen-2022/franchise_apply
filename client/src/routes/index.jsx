// src/routes/index.jsx
import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home")),
  },
  {
    path: "/blog",
    component: lazy(() => import("../pages/Blog")),
  },
  {
    path: "/buy-business",
    component: lazy(() => import("../pages/Buy_Existing_Business")),
  },
  {
    path: "/investor-registration",
    component: lazy(() => import("../pages/RegisterBrand")),
  },
  {
    path: "/master-franchise",
    component: lazy(() => import("../pages/MasterFranchise")),
  },
  {
    path: "/explore/:id",
    component: lazy(() => import("../pages/Explore")),
  },
  {
    path: "/category/:name",
    component: lazy(() => import("../pages/CategoryPage")),
  },
  {
    path: "/buy-magazine",
    component: lazy(() => import("../pages/BuyMagazine")),
  },
  {
    path: "/automobiles",
    component: lazy(() => import("../pages/Automobiles")),
  },
  {
    path: "/brand-franchise-business-model/:id",
    component: lazy(() => import("../pages/BusinessModel")),
  },
  {
    path: "*",
    component: lazy(() => import("../pages/NotFound")),
  },
  {
    path: "/videos",
    component: lazy(() => import("../pages/videos")),
  },
];

export default routes;
