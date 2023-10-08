import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './layout/Layout';
import Home from './pages/Home';
import ErrorPage from './components/ErrorPage';
import Details from './components/Details';
import Donation from './pages/Donation';
import Stat from './pages/Stat';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'',
        element:<Home></Home>,
        loader: () => fetch('./data.json'),
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader: () => fetch('./data.json'),
      },
      {
        path:'/stat',
        element:<Stat></Stat>,
        loader:() => fetch('./data.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
