import logo from "../assets/images/logo.svg";
import logoClose from "../assets/images/icon-menu-close.svg";
import logoMenu from "../assets/images/icon-menu.svg";

function Header({ menuOpen, handleLogoMenuClick }) {
  return (
    <div className="pb-4 flex justify-between items-center">
      <div className="cont_logo_icon w-full flex justify-between items-center ">
        <img
          src={logo}
          alt=""
          className="logo w-10 lg:w-16 hover:rotate-6 duration-200"
        />
        <img
          src={logoMenu}
          onClick={handleLogoMenuClick}
          className="lg:hidden "
        />
      </div>

      <nav className="cont_nav">
        <ul className="lg:flex  justify-between gap-9 items-center text-gray-700 transition-colors  hidden  ">
          <li className="hover:text-Soft-orange cursor-pointer">Home</li>
          <li className="hover:text-Soft-orange cursor-pointer">New</li>
          <li className="hover:text-Soft-orange cursor-pointer">Popular</li>
          <li className="hover:text-Soft-orange cursor-pointer">Trending</li>
          <li className="hover:text-Soft-orange cursor-pointer">Categories</li>
        </ul>
      </nav>
      <div
        className={` backdrop:md:hidden w-2/3 fixed right-0 top-0 z-10 bg-Off-white p-5 h-full space-y-20 overflow-y-auto  ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-200`}
      >
        <div className="flex justify-end">
          <img
            src={logoClose}
            onClick={handleLogoMenuClick}
            className="lg:hidden "
          />
        </div>
        <ul className="flex flex-col gap-4  text-gray-700 transition-colors">
          <li className="hover:text-Soft-orange cursor-pointer">Home</li>
          <li className="hover:text-Soft-orange cursor-pointer">New</li>
          <li className="hover:text-Soft-orange cursor-pointer">Popular</li>
          <li className="hover:text-Soft-orange cursor-pointer">Trending</li>
          <li className="hover:text-Soft-orange cursor-pointer">Categories</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
