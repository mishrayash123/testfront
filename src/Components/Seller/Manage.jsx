import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic from "../Images/profile.jpg";
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

function Manage() {
  const [profiledata,setprofiledata] = useState([]);
  const [products,setproducts] = useState([])
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
    setproducts(data.filter((e) => (e.userid === localStorage.getItem("userId"))))
  } else {
    alert("Something went wrong please login again");
  }
} catch (error) {
  console.error("Error during login:", error);
}
  }

  const fetchData = async () => {
    try {
        const response = await fetch(
          "https://e-cartbackend.onrender.com/getsellers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
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

//   const remove = async (id) => {
//     try {
//     const response = await fetch(
//       `https://e-cartbackend.onrender.com/deleteorders/${id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.ok) {
//       const data = await response.json();
//       setorderdata(orderdata.filter((e) => (e._id === id)))
//       alert("Removed");
//     } else {
//       alert("something went wrong");
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//   }
// }

  useEffect(() => {
    fetchData();
    fetchData2()
  }, []);

  return (
    <div className="p-8  ">
        <div className="flex items-center justify-center m-6 ">
        {
          profiledata.filter((e) => (e.userid === localStorage.getItem("userId"))).map(profiledata =>(
          <div className="max-w-md xl:max-w-2xl bg-white ">
            <div className="shadow-xl   p-6 md:p-8 lg:p-10 xl:p-12">
              {profiledata.fname && (
                <div className="text-center">
                  <h3 className="text-base lg:text-2xl font-bold leading-8">
                    Account no:{profiledata.bank}
                  </h3>
                </div>
              )}
              <table className="text-lg lg:text-base my-6">
                <tbody>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                       IFC Code:
                      </td>
                      <td className="px-2 py-2">{profiledata.ifc}</td>
                    </tr>
                  <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Gst No:
                      </td>
                      <td className="px-2 py-2">{profiledata.gstno}</td>
                    </tr>
                  {profiledata.address && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Address
                      </td>
                      <td className="px-2 py-2">{profiledata.address}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="text-center my-6">
                  <Link
                    to="/addproducts"
                    className="text-xl text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  >
                    Add Products
                  </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className='my-3'>
        <h2 className="font-bold text-center text-2xl">Products's History</h2>
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-3 gap-8 w-[90%]  " role="group">
         {
          products.map(products =>(
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
    </div>
  );
}

export default Manage;