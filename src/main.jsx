import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Root from './Root/Root';
import Home from './Home/Home';
import Middledetails from './Components/MiddleDEtails/Middledetails';
import Statics from './Components/Static/Statics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
          path:'/',
          element: <Home></Home>
      },
      {
        path:'/middle/:Id',
        element:<Middledetails></Middledetails>,
        loader: () => fetch('../data.json')
      },
      {
        path:'/statics',
        element:<Statics></Statics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
