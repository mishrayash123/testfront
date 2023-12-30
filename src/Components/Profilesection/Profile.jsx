import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic from "../Images/profile.jpg";

function Profile() {
  const [profiledata,setprofiledata] = useState([]);

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
    alert("Something went wrong");
  }
} catch (error) {
  console.error("Error during login:", error);
}
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8  ">
        <div className="flex items-center justify-center m-6 ">
        {
          profiledata.filter((e) => (e._id === localStorage.getItem("userId"))).map(profiledata =>(
          <div className="max-w-md xl:max-w-2xl bg-white ">
            <div className="shadow-xl   p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="photo-wrapper mx-auto mb-6 ">
                <img
                  className="w-40 h-40 object-cover rounded-full mx-auto border-solid border-2 border-black"
                  src={ pic}
                  alt="Profile"
                />
              </div>
              {profiledata.fname && (
                <div className="text-center">
                  <h3 className="text-base lg:text-2xl font-bold leading-8">
                    {profiledata.fname} {profiledata.lname}
                  </h3>
                </div>
              )}
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
                  {profiledata.phone && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Phone
                      </td>
                      <td className="px-2 py-2">
                        {profiledata.phone}
                      </td>
                    </tr>
                  )}
                  {profiledata.address && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Address
                      </td>
                      <td className="px-2 py-2">{profiledata.address}</td>
                    </tr>
                  )}
                  <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        City
                      </td>
                      <td className="px-2 py-2">{profiledata.city}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        State
                      </td>
                      <td className="px-2 py-2">{profiledata.state}</td>
                    </tr>
                  {profiledata.zip && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Pincode
                      </td>
                      <td className="px-2 py-2">{profiledata.zip}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="text-center my-6">
                {!(true) ? (
                  <>
                    <p className="text-sm font-light text-red-500 dark:text-red-400 mb-2">
                      Your Profile is Incomplete please complete your Profile
                    </p>
                    <Link
                      to="/edit"
                      className="text-sm text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    >
                      Complete Profile
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/edit"
                    className="text-sm text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  >
                    Edit Profile
                  </Link>
                )}
              </div>
            </div>
          </div>
          ))}
        </div>
    </div>
  );
}

export default Profile;