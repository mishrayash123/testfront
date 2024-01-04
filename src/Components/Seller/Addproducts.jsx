import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {storage} from "../Firebase/firebase.config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"

function Edit() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [image1, setimage1] = useState(null);
  const [textoimage, settextoimage] = useState("");
  const [error, setError] = useState(""); // Track form validation error
  const navigate = useNavigate();

  

  const handleuploadimage = async() =>{
    const imageRef = ref(storage, title);
    if (image1) {
        uploadBytes(imageRef, image1).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setimage(url);
                alert("Image Uploaded")
                settextoimage(" ")
            }).catch((error) => {
                console.log(error.message, "error geting the image url");
            })
            setimage(null);
            settextoimage(" ")
        }).catch((error) => {
            console.log(error.message);
        })
    }
  }

  function handleChange(event) {
      setimage1(event.target.files[0]);
settextoimage("Image selected");
handleuploadimage();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setprice(parseInt(price))
    const userid = localStorage.getItem("userId");
    try {
      const response = await fetch(
        `https://e-cartbackend.onrender.com/addtoproducts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title,userid,price,description,image}),
        }
      );

      if (response.ok) {
        // Handle successful profile update
        alert("Added successfully");
        navigate('/manage')
      } else {
        alert("Something wents wrong")
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
            onChange={(e) => settitle(e.target.value)}
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
          <input type="file" onChange={handleChange}/>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm-w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
       onClick={(e)=>{
        handleSubmit(e);
       }}
       >
          Add Product
        </button>
        {textoimage && <p className="text-red-500">{textoimage}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default Edit;