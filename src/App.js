import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';
import About from './components/About';
import Contact from './components/Contact'
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router';

const AppLayout=()=>{
    return(
        <>
            <Header />
            <div className='app'>
                <Outlet />
            </div>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About /> 
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }
        ],
  
    }
])


const root=ReactDOM.createRoot(document.querySelector("#root"))
root.render(<RouterProvider router={appRouter} />)