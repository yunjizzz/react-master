import React, { useState } from "react";
import Router from "./screens/Router";
import { Outlet } from "react-router-dom";

function Root(){

   return( <div><Outlet/></div>)

    // const [value, setValue] = useState("");
    // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //     const {currentTarget: {value}} = event;
    //     setValue(value)
    // };
    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log("hello", value);
    // };
    // return (
    //     <div>
    //         <form onSubmit={onSubmit}>
    //             <input type="text" value={value} onChange={onChange} placeholder="username"/>
    //             <button>Log in</button>
    //         </form>
    //     </div>
    // )
}

export default Root;