import axios from 'axios';
import React, { useState, useEffect } from 'react';
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



function Cart() {
  // const [products, setproducts] = useState<Products[]>([]);

  const products = ['dsdk','dskjdk','djkdj','sjdj','f','f']

  const options = {
    method: 'GET',
  url: 'https://real-time-amazon-data.p.rapidapi.com/search',
  params: {
    query: 'Phone',
    page: '1',
    country: 'US',
    category_id: 'aps'
  },
  headers: {
    'X-RapidAPI-Key': 'e8d49997e3mshc19c5745cb99d78p1bb5a1jsnedfa2627415c',
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
  }
  };

  const fetchData = async () => {
    // try {
    //   const response = await axios.request(options);
    //   setproducts(response.data.data.products);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  useEffect(() => {
    
    fetchData();
  }, []);
 

    return (
      <div className='my-3'>
        <h2 className="font-bold m-5 text-2xl">My cart</h2>
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-3 gap-8 w-[90%] max-[640px]:w-1/2" role="group">
         {
          products.map(products =>(
            <a href='/product'>
            <Card className="w-3/4 max-w-[26rem] shadow-lg" placeholder="k">
      <CardHeader floated={false} color="blue-gray" placeholder="k">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="ui/ux review check"
          className='rounded-lg'
        />
      </CardHeader>
      <CardBody placeholder="k">
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium" placeholder="k">
            Wooden House, Florida
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
        <Typography color="gray" placeholder="k">
          Enter a freshly updated and thoughtfully .
        </Typography>
        {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        </div> */}
      </CardBody>
    </Card>
    </a>
          ))
         }
     </div>
      </div>
    );
  }
  
  export default Cart;