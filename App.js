import React from 'react'
import ReactDOM from 'react-dom/client'

const Heading1=()=><h1>hello from jsx</h1>

const Heading=()=>{
    return (
        <div>
            <Heading1 />
            <h1>Hello from functional component</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.querySelector("#root"))
root.render(<Heading />)