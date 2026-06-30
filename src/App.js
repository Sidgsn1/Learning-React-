import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';
import About from './components/About';
import Contact from './components/Contact'
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router';
// import Grocery from './components/Grocery';

//lazy loading
const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout=()=>{
    return(
        <div className=''>
            <Header />
            <div className='app'>
                <Outlet />
            </div>
        </div>
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
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            }
        ],
  
    }
])


const root=ReactDOM.createRoot(document.querySelector("#root"))
root.render(<RouterProvider router={appRouter} />)