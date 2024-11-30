

import MainNavbarLinks from "./main-navbar";
import MobileNavbarView from "./mobile-navbar-view";
  

const MainNavbar = () => {
  return (
    <nav className="bg-teal-600" >
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Company Name */}
        <div className="lg:text-3xl  sm:text-2xl font-semibold ">
          Gowin Consultancy
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex flex-1 justify-center">
          <MainNavbarLinks />
        </div>
        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
         <MobileNavbarView />
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;

 


