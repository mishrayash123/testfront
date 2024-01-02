import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";




function Product() {
    const location = useLocation();
    const [products, setproducts] = useState([]);
    const [cat, setcat] = useState("");
    const [productid, setproductid] = useState(0);
    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [price, setprice] = useState(0);
    const [isincart, setisincart] = useState(location.state.isincart);
    const nav = useNavigate();

    const options = {
        method: 'GET',
        url: `https://fakestoreapi.com/products/${location.state.id}`,
    };

    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setcat(response.data.category)
        } catch (error) {
            console.error(error);
        }
    }

    
    const options1 = {
        method: 'GET',
        url: `https://fakestoreapi.com/products/${cat}`,
    };

    const fetchData1 = async () => {
        try {
            const response = await axios.request(options1);
            setproducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchData();
        fetchData1();
    }, []);

    const addtocart = async () => {
        try {
            const userid = localStorage.getItem("userId");
        const response = await fetch(
          "https://e-cartbackend.onrender.com/addtocart",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({productid,userid,title,price,image}),
          }
        );
  
        if (response.ok) {
          const data = await response.json();
          alert("Added");
          setisincart(true)
        } else {
          alert("Already exist");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }

    const remove = async () => {
        try {
        const response = await fetch(
          `https://e-cartbackend.onrender.com/deleteCart/${location.state.objid}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.ok) {
          const data = await response.json();
          setisincart(false)
          alert("Removed");
        } else {
          alert("something went wrong");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }


    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                {
                    products.filter((e) => (e.id == location.state.id)).map(products => (
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="md:flex-1 px-4">
                                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                        <img className="w-full h-full object-cover" src={products.image} alt="Product Image" />
                                    </div>
                                    <div className="flex -mx-2 mb-4">
                                        <div className="w-1/2 px-2">
                                            {
                                                isincart? <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                                                onClick={()=>{
                                                   remove(products.id)
                                                }}
                                                >Remove</button> :<button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                                                onClick={()=>{
                                                    setimage(products.image)
                                                    setprice(products.price)
                                                    settitle(products.title)
                                                    setproductid(products.id)
                                                    addtocart()
                                                }}
                                                >Add to Cart</button>
                                            }
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={
                                (e) => {
                                    nav('/checkout', { state: { id: products.id } });
                                }
                            }>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex-1 px-4">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name:</h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{products.title}
                                    </p>
                                    <div className="flex mb-4">
                                        <div className="mr-4">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                            <span className="text-gray-900 dark:text-gray-300 font-bold">{products.price} &#8377;</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                        </div>
                                        
                                    </div>
                                    {!(cat==="electronics" || cat==="jewelery")
                                        &&(
                                        <div>
                                            <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                                        <div className="flex items-center mt-2">
                                            <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                        <div className="flex items-center mt-2">
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                        </div>
                                    </div>
                                        </div>
                                        )
                                    }
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{products.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     ))
                } 
            </div>
            <div className='my-3'>
                <h2 className="font-bold text-center text-2xl">Similar Products</h2>
                <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-3 gap-8 w-[90%]" role="group">
                    {
                        products.filter((e) => (e.category == cat)).map(products => (
                            <a href='' onClick={
                                (e) => {
                                    nav('/product', { state: { id: products.id } });
                                }
                            }>
                                <Card className="cardwid shadow-lg m-2" placeholder="k">
                                    <CardHeader floated={false} color="blue-gray" placeholder="k">
                                        <img
                                            src={products.image}
                                            alt="ui/ux review check"
                                            className='rounded-lg wid'
                                        />
                                    </CardHeader>
                                    <CardBody placeholder="k">
                                        <div className="mb-3 ">
                                            <Typography variant="h6" color="blue-gray" className="font-medium" placeholder="k">
                                                {products.title.slice(0, 20)}
                                            </Typography>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <Typography color="gray" className=' text-black font-bold' placeholder="k">
                                                {products.price} &#8377;
                                            </Typography>
                                            <Typography
                                                placeholder="k"
                                                color="blue-gray"
                                                className="flex items-center gap-1.5 font-normal"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                4.5
                                            </Typography>
                                        </div>
                                        {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        </div> */}
                                    </CardBody>
                                </Card>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Product;