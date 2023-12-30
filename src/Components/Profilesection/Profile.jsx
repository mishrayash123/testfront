import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic from "../Images/profile.jpg";
import { useAuth } from "../../AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="p-8  ">
        <div className="flex items-center justify-center m-6 ">
          <div className="max-w-md xl:max-w-2xl bg-white ">
            <div className="shadow-xl   p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="photo-wrapper mx-auto mb-6 ">
                <img
                  className="w-40 h-40 object-cover rounded-full mx-auto border-solid border-2 border-black"
                  src={ pic}
                  alt="Profile"
                />
              </div>
              {/* {profileData.name && (
                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-bold leading-8">
                    {profileData.name}
                  </h3>
                </div>
              )} */}
              {/* <table className="text-lg lg:text-base my-6">
                <tbody>
                  {profileData.address && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Address
                      </td>
                      <td className="px-2 py-2">{profileData.address}</td>
                    </tr>
                  )}
                  {profileData.contact?.mobile && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Phone
                      </td>
                      <td className="px-2 py-2">
                        {profileData.contact.mobile}
                      </td>
                    </tr>
                  )}
                  {profileData.email && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Email
                      </td>
                      <td className="px-2 py-2">{profileData.email}</td>
                    </tr>
                  )}
                  {profileData.sex && (
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Sex
                      </td>
                      <td className="px-2 py-2">{profileData.sex}</td>
                    </tr>
                  )}
                </tbody>
              </table> */}
              <div className="text-center my-6">
                {/* {!(profileData.image && profileData.sex && profileData.contact &&  profileData.address) ? (
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
                )} */}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Profile;