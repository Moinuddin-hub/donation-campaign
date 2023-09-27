
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Donation from "../Page/Donation/Donation";
import Statistics from "../Page/Statistics/Statistics";
import Cart from "../Page/Cart/Cart";
const myCreatedRoute = createBrowserRouter([

    { 
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
              path:'/donation',
              element:<Donation></Donation>  
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/cart/:id',
                element:<Cart></Cart>,
                loader:()=>fetch('/data.json')
            }

        ]
    }
])


export default myCreatedRoute;