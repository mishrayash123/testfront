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
import '../css/product.css'
import {useNavigate} from 'react-router-dom'



function Products() {
  const [products, setproducts] = useState([]);
  const [Search,setSearch] = useState(" ")
  const nav = useNavigate();


  const options = {
    method: 'GET',
  url: 'https://fakestoreapi.com/products/',
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setproducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }


 useEffect(() => {
   
   fetchData();
 }, []);  

    return (
      <div>
<div className=" flex justify-center items-center ">
	<div className="container mx-auto bg-blue-600 p-14">
		<form>
			<h1 className="text-center font-bold text-white text-4xl mb-5">Search your product</h1>
				<div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input className="text-base text-gray-400 flex-grow bg-gray-300 rounded-lg py-2 px-2 my-1 " type="text" placeholder="Search your product's name" value={Search} onChange={(e)=>{
            setSearch(e.target.value)
          }}/>
					<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						<select id="Com" className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
            <option value="com" selected>electronics</option>
            <option value="net">jewelery</option>
            <option value="org">men's clothing</option>
            <option value="io">women's clothing</option>
          </select>
						<button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 my-1 font-thin">Search</button>
					</div>
				</div>
		</form>
	</div>
</div>
<div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-3 gap-8 w-[90%] " role="group">
         {
          products.filter((e)=>(e.title.toLowerCase().includes(Search.toLowerCase()))).map(products =>(
            <a href='' onClick={
              (e) => {
                nav('/product', { state: { id: products.id,isincart:false} });
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
           {products.title.slice(0,20)}
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
    );
  }
  
  export default Products;