import React, { useState } from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
import Logo from "./Images/logoecart.png"



const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  

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
        <Typography as="a" href='/login' className="cursor-pointer py-1.5 font-medium " placeholder="jsjx" >
          Profile
        </Typography>
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
