import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';

const AppLayout=()=>{
    return(
        <>
            <Header />
            <div className='app'>
                <Body />
            </div>
        </>
    )
}

const root=ReactDOM.createRoot(document.querySelector("#root"))
root.render(<AppLayout />)