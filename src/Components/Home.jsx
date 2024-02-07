import './css/all.css'
import React, { useEffect, useState } from "react";


function Home() {
  const [longUrl, setlongUrl] = useState("");
  const [shortedurl, setshortedurl] = useState("");
  const [urlCode, seturlCode] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!urlCode){
     alert("please use any small code")
     return;
    }
    try {
        const userid = localStorage.getItem("userIdurlshort");
        const response = await fetch(`https://urlshortner-iakh.onrender.com/api/url`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({longUrl,urlCode,userid}),
        });
        if (response.ok) {
          const data = await response.json();
          setshortedurl("https://urlshortner-iakh.onrender.com/"+String(data.urlCode))
        }else {
          alert("invailid Url");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
 }

    return (
      <div>
        <h3 className='font-bold text-3xl text-black text-center m-5'>Url Shortner 💫</h3>
       <div class="w-3/4 mx-auto my-16 ">
  <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="l">
       Long Url
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="l" type="text" placeholder="Long Url"  onChange={(e)=>{
        setlongUrl(e.target.value)
      }}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Your Code
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e)=>{
        seturlCode(e.target.value)
      }}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="bl">
        Base Url
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="bl" type="text"  value={"https://urlshortner-iakh.onrender.com"} />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="sl">
       Shorted Url
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sl" type="text" placeholder="Shorted Url" value={shortedurl} />
    </div>
    <div className='my-3'>
    <a href={shortedurl} className='text-base text-start text-blue-800' target='_blanck'>
     {shortedurl}
    </a>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e)=>{
        handleSubmit(e)
      }}>
        Short
      </button>
    </div>
  </form>
</div>
      </div>
    );
  }
  
  export default Home;
  