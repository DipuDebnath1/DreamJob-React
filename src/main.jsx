import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import Home from './Home/Home'
import CardDetails from './Cards/CardDetails'
import Applied from './Applyed/Applied'
import Blog from './Blog/Blog'


const router = createBrowserRouter([
  {
    path:'/',
   element: <App></App>,
   errorElement:<div className='text-center h-[80vh] flex flex-col items-center'> <h1 className='text-5xl text-center font-bold'>No Content available!!!! </h1><br />
        <button className='btn btn-primary'><Link to={'/'}> go home</Link></button>
      </div>,
   children:([
    {
      path:'/',
      element: <Home></Home>,
      loader: ()=>fetch('categories.json')
    },
    {
      path:'/:id',
      element:<CardDetails></CardDetails>,
      loader:()=>fetch('/jobs.json')

    },
    {
     path: '/applied',
     element: <Applied></Applied>,
      loader: ()=>fetch('./jobs.json')
    },
    {
     path: '/Blog',
     element: <Blog></Blog>
    }
   ])
  }
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
