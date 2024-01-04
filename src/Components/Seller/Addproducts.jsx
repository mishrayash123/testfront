import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [description, setdescription] = useState("");
  const [image, setimage] = useState(null);
  const [textoimage, settextoimage] = useState("");
  const [error, setError] = useState(""); // Track form validation error
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setimage(file);
    settextoimage("Image selected");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("token");
    const id = localStorage.getItem("userId");

    

    try {
      const response = await fetch(
        `https://start1-backend.onrender.com/auth/signUp/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          body: [],
        }
      );

      if (response.ok) {
        // Handle successful profile update
        alert("Profile updated successfully");
        navigate("/");
      } else {
        // Handle errors
        const data = await response.json();
        console.error("Error updating profile:", data);
      }
    } catch (error) {
      console.error("Error during profile update:", error);
    }
  };

  return (
    <div>
      <h2 className="m-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Add Products
      </h2>
      <form onSubmit={handleSubmit} className="m-8">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={title}
            onChange={(e) => settextoimage(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="mobile"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title{" "}
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="address"
            name="address"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="address"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description{" "}
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            id="sex"
            name="sex"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="sex"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price:
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="image"
          >
            Product's Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            onChange={handleImageChange}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm-w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
        >
          Add Product
        </button>
        {textoimage && <p>{textoimage}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default Edit;