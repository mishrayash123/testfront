import { Navigate, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Summaery() {
    const [date, setDate] = useState(new Date());
    const [products, setproducts] = useState([]);
    const [orderdata,setorderdata] = useState([])
    const [profiledata,setprofiledata] = useState([]);
    const location = useLocation();
    const nav = useNavigate();

    const fetchData2 = async () => {
        try {
      const response = await fetch(
        "https://e-cartbackend.onrender.com/getorders",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setorderdata(data)
      } else {
        alert("Something went wrong please login again");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
      }

  const fetchData = async () => {
    try {
      const sessionToken=localStorage.getItem("token");
  const response = await fetch(
    "https://e-cartbackend.onrender.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({sessionToken}),
    }
  );
  if (response.ok) {
    const data = await response.json();
    setprofiledata(data)
  } else {
    alert("Something went wrong please login again");
  }
} catch (error) {
  console.error("Error during login:", error);
}
  }



    

    const fetchData1 = async () => {
        try {
            const response = await fetch(
              "https://e-cartbackend.onrender.com/getproducts",
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (response.ok) {
              const data = await response.json();
              setproducts(data)
            } else {
              alert("Something went wrong please login again");
            }
          } catch (error) {
            console.error("Error during login:", error);
          }
    }


    useEffect(() => {
        fetchData1();
        fetchData();
        fetchData2();
    }, []);

    const handlePrint = () => {
        window.print();
      };

    return (
      <div>
         {
                    orderdata.filter((e) => (e.productid === location.state.id)).map(order => (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className='flex flex-row justify-end my-4'>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512" className='cursor-pointer' onClick={handlePrint}>
        <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
           </div>
            <div className="flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #{order.orderid}</h1>
                <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{order.date}</p>
            </div> 
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    {
                    products.filter((e) => (e._id == location.state.id)).map(products => (
                        <div>
                    <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                        
                        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                <img className="w-full hidden md:block" src={products.image} alt="dress" />
                            </div>
                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{products.title}</h3>
                                    {/* <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                                        <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                                        <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                                    </div> */}
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base dark:text-white xl:text-lg leading-6">{products.price} &#8377;</p>
                                    <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{order.quantity}</p>
                                    <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">{order.quantity*products.price} &#8377;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{order.quantity*products.price} &#8377;</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Discount <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">PromoCode</span></p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">-0 &#8377; (0%)</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">50.00 &#8377;</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Taxes</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">10.99 &#8377;</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{order.quantity*products.price+10.99+50.00} &#8377;</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        {location.state.cod ?
                               <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">COD Delivery<br /><span className="font-normal">Delivery with 2-4 days</span></p>
                                :<p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">Pre paid Delivery<br /><span className="font-normal">Delivery with 24 Hours</span></p>
                                        }
                                        
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">{order.quantity*products.price+10.99+50.00} &#8377;</p>
                            </div>
                            {/* <div className="w-full flex justify-center items-center">
                                <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
                            </div> */}
                        </div>
                    </div>
                    </div>
                      ))}
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                    {
          profiledata.filter((e) => (e._id === localStorage.getItem("userId"))).map(profiledata =>(
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <div className="flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">{profiledata.fname} {profiledata.lname}</p>
                                </div>
                            </div>
                            <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <p>&#9742;</p>
                                <p className=" text-sm leading-5 ">{profiledata.phone}</p>
                            </div>
                            <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg" alt="email" />
                                <img className="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg" alt="email" />
                                <p className=" text-sm leading-5 ">{profiledata.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                    <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{profiledata.address}</p>
                                </div>
                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                    <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{profiledata.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        ))}
      </div>
    );
  }
  
  export default Summaery;
  