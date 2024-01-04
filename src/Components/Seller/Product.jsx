import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'



function Product() {
    const location = useLocation();
    const [products, setproducts] = useState([]);
    const [productid, setproductid] = useState(0);
    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [price, setprice] = useState(0);
    const [isincart, setisincart] = useState(location.state.isincart);
    const nav = useNavigate();

    
    const fetchData2 = async () => {
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
        fetchData2();
    }, []);

    const addtocart = async () => {
        try {
            const userid = localStorage.getItem("userId");
            console.log(JSON.stringify({productid,userid,title,price,image}))
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
          console.log(response)
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
                    products.filter((e) => (e._id == location.state.id)).map(products => (
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="md:flex-1 px-4">
                                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                        <img className="w-full h-full object-cover" src={products.image} alt="Product Image" />
                                    </div>
                                    {
                                      location.state.edit ? <div className="w-1/2 px-2">
                                      <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={
                          (e) => {
                              
                          }
                      }>Edit</button>
                                  </div>:<>
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
                                                    setproductid(products._id)
                                                    addtocart()
                                                }}
                                                >Add to Cart</button>
                                            }
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={
                                (e) => {
                                    nav('/sellercheckout', { state: { id: products._id } });
                                }
                            }>Buy Now</button>
                                        </div>
                                    </div>
                                      </>
                                    }
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
        </div>
    );
}

export default Product;