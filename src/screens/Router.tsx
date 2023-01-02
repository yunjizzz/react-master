import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Root from "../Root";
import { Children } from "react";
import ErrorComponent from "../components/ErrorComponent";
import NotFound from "./NotFound";
import User from "./users/User";

// function Router(){
//     return <BrowserRouter>
//         <Header/>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/abount" element={<About/>}/>
//         </Routes>
//     </BrowserRouter>
// }


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        children:[
            {
                path: "about",
                element: <About/>,
            },
            {
                path:"",
                element: <Home/>,
                errorElement: <ErrorComponent />,
            },
            {
                path: "users/:userId",
                element: <User />,
              },
        ],
        errorElement: <NotFound/>
    }
])

export default router;