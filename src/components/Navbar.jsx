import { useState } from "react";

const Navbar = () => {
 const [open, setopen] = useState(false);

 return (
  <header className="Content_Navbar">
   <nav className="Navbar">
    <div className="flex justify-between items-center">
     <span className="font-poppins text-base text-slate-950 lg:py-0">
      Design<span className="text-second">AGENCY</span>
     </span>

     <div className="lg:hidden flex items-center gap-x-2">
      <div className="space-x-2  flex justify-center items-center">
       <button className="Button_Login">login</button>
       <button className="Button_Register">register</button>
      </div>

      <div onClick={() => setopen(!open)}>
       {open ? (
        <i className="ri-close-line cursor-pointer text-2xl"></i>
       ) : (
        <i className="ri-menu-line lg:hidden block cursor-pointer text-2xl"></i>
       )}
      </div>
     </div>
    </div>

    <div className={`Content_Items ${open ? "top-20" : "top-[-820px]"}`}>
     <span className="Item">services</span>
     <span className="Item">abaut us</span>
     <span className="Item">contact us</span>
     <div className="space-x-4  lg:flex hidden justify-center items-center mt-20 lg:mt-0">
      <button className="Button_Login">login</button>
      <button className="Button_Register">register</button>
     </div>
    </div>
   </nav>
  </header>
 );
};

export default Navbar;
