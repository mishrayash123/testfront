import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



const Register = () => {
  const [veryfied, setveryfied] = useState(false); 
  const [otp, setotp] = useState(""); 
  const [email, setEmail] = useState("");
  const [yesd, setyesd] = useState(false);
  const [yesd1, setyesd1] = useState(true);
  const navigate = useNavigate();

  const handleRegister1 = async(e) => {
    e.preventDefault();
    navigate("/")
  };
  

  const handleRegister = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://test-8ik9.onrender.com/auth/sendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Otp Sent");
        setyesd1(false)
        setyesd(true);
        localStorage.setItem("tokenurlshort", data.sessionToken);
        localStorage.setItem("userIdurlshort", data._id);
      }else {
        setyesd1(true)
        setyesd(false);
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const varify = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://test-8ik9.onrender.com/auth/verifyotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,otp}),
      });

      if (response.ok) {
        alert("Otp Correct");
        setveryfied(true);
        setyesd(false);
      }else {
        setveryfied(false);
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <section >
      <div className="container h-full px-6 mt-2">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white shadow-2xl ">
           E-Cart   
        </a> */}
        <div className="w-full bg-gray-50 rounded-lg border-gray-50 border-4 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign up to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleRegister}>
                
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    {
                      yesd1 && (
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" onClick={handleRegister}>Send otp</button>
                      )
                    }
                    {
                      yesd && (
<div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Otp</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required   value={otp}
                  onChange={(e) => setotp(e.target.value)}/>
                    </div>
                      )
                    }
                    {
                      yesd && (
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" onClick={varify}>Varify</button>
                      )
                    }
                    {
                      veryfied && (
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" onClick={handleRegister1}>Sign in</button>
                      )
                    }
                </form>
            </div>
        </div>
    </div>
    </div>
        </div>
    </section>
  );
};

export default Register;
