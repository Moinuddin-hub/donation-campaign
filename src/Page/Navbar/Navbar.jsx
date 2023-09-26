
import { NavLink } from "react-router-dom";
import Logo from "../../Components/Logo/Logo";
const Navbar = () => {
    return (
        <div className="">
           
           <nav className="flex justify-between items-center">
             <Logo></Logo>
            <ul className="flex gap-5">
  <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : 
  isActive ? "text-green-400 underline" : "" }> Home </NavLink> </li>

<li><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : 
  isActive ? "text-green-400 underline" : "" }> Donation </NavLink> </li>

<li><NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : 
  isActive ? "text-green-400 underline" : "" }> Statistics </NavLink> </li>

            </ul>
           </nav>

         
         {/* <div>
         <img className="w-full" src="https://i.ibb.co/ZBWJh9T/Clothing.png" alt="" />
         </div> */}
        </div>
    );
};

export default Navbar;