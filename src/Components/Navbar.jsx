import React, { useState ,useRef,useEffect} from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
import Logo from "./Images/logoecart.png"
import { useAuth } from "../AuthContext";
import pic from './Images/profile.jpg';



const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isLoggedIn, logout} = useAuth();
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium" placeholder="jsjx">
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium" placeholder="jsjx">
        <a href="/products" className="flex items-center">
          Products
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium" placeholder="jsjx">
        <a href="/cart" className="flex items-center">
          Cart
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium" placeholder="jsjx">
        <a href="/deals" className="flex items-center">
          Deals
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto w-full px-4 py-2 lg:px-8 lg:py-4 bg-blue-600 text-white" placeholder="jsjx">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" >
        <img
          src={Logo}
          alt="ui/ux review check"
          className=' w-[70px] h-[50px]'
        />
        </a>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
        {isLoggedIn ? (
                  <>
                    <div
                      className="relative inline-block text-left"
                      ref={dropdownRef}
                    >
                      <button
                        onClick={handleDropdownClick}
                        className="w-12 h-12 p-1 relative group rounded-full overflow-hidden focus:outline-none"
                      >
                        <img
                          className="object-cover w-full h-full rounded-full border-solid border-2 border-black group-hover:opacity-70"
                          src={pic}
                          alt="Profile"
                        />
                      </button>
                      {isDropdownOpen && (
                        <div className=" origin-top-right absolute right-0 mt-3 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            <a
                              href="/"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={closeDropdown}
                            >
                              View Profile
                            </a>
                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <button onClick={() => { closeDropdown(); logout(); }}>
                              Logout
                            </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <a
                    href="/login"
                    className="hover:bg-black text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Sign In
                  </a>
                )}
          {/* <Button variant="gradient" size="sm" className="hidden lg:inline-block" placeholder="jsjx">
            Sign In
          </Button> */}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
           placeholder="jsjx"
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className="bg-blue-600">
        <div className="container mx-auto">{navList}</div>
        <Typography as="a" href='/login' className="cursor-pointer py-1.5 font-medium" placeholder="jsjx" >
          Profile
        </Typography>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarComponent;
