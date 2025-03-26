// src/routes/index.jsx
import { lazy } from 'react'

const routes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
  },
  {
    path: '/explore/:id',
    component: lazy(() => import('../pages/Explore')),
  },
  {
    path: '*',
    component: lazy(() => import('../pages/NotFound')),
  },
]

export default routes