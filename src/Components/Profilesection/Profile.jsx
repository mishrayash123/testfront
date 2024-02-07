import React, { useEffect, useState } from "react";
import pic from "../Images/profile.jpg";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function Profile() {
  const [profiledata,setprofiledata] = useState([]);
  const [urlsdata,seturlsdata] = useState([])

  const fetchData2 = async () => {
    try {
  const response = await fetch(
    "https://urlshortner-iakh.onrender.com/api/geturls",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    seturlsdata(data)
  } else {
    alert("Something went wrong please login again");
  }
} catch (error) {
  console.error("Error during login:", error);
}
  }

  const fetchData = async () => {
    try {
      const sessionToken=localStorage.getItem("tokenurlshort");
  const response = await fetch(
    "https://urlshortner-iakh.onrender.com/users",
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
    console.log(data)
  } else {
    alert("Something went wrong");
  }
} catch (error) {
  console.error("Error during login:", error);
}
  }

  const remove = async (id) => {
    try {
    const response = await fetch(
      `https://urlshortner-iakh.onrender.com/api/deleteurl/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      alert("Removed");
      fetchData2();
    } else {
      alert("something went wrong");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}

  useEffect(() => {
    fetchData();
    fetchData2()
  }, []);

  return (
    <div className="p-8  ">
        <div className="flex items-center justify-center m-6 ">
        {
          profiledata.filter((e) => (e._id === localStorage.getItem("userIdurlshort"))).map(profiledata =>(
          <div className="max-w-md xl:max-w-2xl bg-white ">
            <div className="shadow-xl   p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="photo-wrapper mx-auto mb-6 ">
                <img
                  className="w-40 h-40 object-cover rounded-full mx-auto border-solid border-2 border-black"
                  src={ pic}
                  alt="Profile"
                />
              </div>
              
              <table className="text-lg lg:text-base my-6">
                <tbody>
                  {profiledata.email && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Email
                      </td>
                      <td className="px-2 py-2">{profiledata.email}</td>
                    </tr>
                  )}
                  <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Username
                      </td>
                      <td className="px-2 py-2">{profiledata.username}</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
          ))}
        </div>
        <div className='my-3'>
        <h2 className="font-bold text-center text-2xl">Sorted Url's History</h2>
       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-3 gap-8 w-full sm:w-5/6 lg:w-3/4 xl:w-11/12" role="group">
         {
          urlsdata.filter((e) => (e.userid === localStorage.getItem("userIdurlshort"))).map(url =>(
            <Card className=" shadow-lg m-2" placeholder="k">
      <CardBody placeholder="k" className="text-wrap overflow-hidden">
        <div className="mb-3 ">
        <div className='my-3 text-center'>
    <a href={url.longUrl} className='text-base font-bold text-blue-800' target='_blanck'>
    Long Url
    </a>
    </div>
          <Typography variant="h6" color="blue-gray" className="font-base text-center" placeholder="k">
           <h2 className="text-black">Url Code:</h2>{url.urlCode}
          </Typography>
          <Typography variant="h6" color="blue-gray" className="font-base text-center" placeholder="k">
           <h2 className="text-black">Short Url :</h2>
          </Typography>
          <div className='mb-3 text-center'>
    <a href={url.shortUrl} className='text-base font-bold text-blue-800' target='_blanck'>
    {url.shortUrl}
    </a>
    </div>
          <Typography variant="h6" color="blue-gray" className="font-base text-center" placeholder="k">
          <h2 className="text-black">Date :</h2>{Date(url.datenew)}
          </Typography>
          <a
                    className="text-sm text-center cursor-pointer text-red-500 italic hover:underline hover:text-red-900 font-medium"
                    onClick={
                      (e) => {
                        remove(url._id)
                      }
                  }>
                    <h2 className="text-center">Delete</h2>
                  </a>
        </div>
      </CardBody>
    </Card>
          ))
         }
     </div>
      </div>
    </div>
  );
}

export default Profile;