import {Outlet} from "react-router-dom";
import Navbar from "../Page/Navbar/Navbar";
const MainLayout = () => {
    return (
        <div className="max-w-[1000px] mx-auto">
        <Navbar></Navbar>
        <div className="py-5 mt-8">
            <Outlet></Outlet>
        </div>
        
        </div>
    );
};

export default MainLayout;