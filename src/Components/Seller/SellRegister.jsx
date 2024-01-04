import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import img1 from '../Images/checkmark.png'
import img2 from '../Images/firework.png'




const SellRegister = () => {
  const [gstno, setgstno] = useState(""); 
  const [bank, setbank] = useState("");
  const [address, setaddress] = useState("");
  const [ifc, setifc] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
      setIsModalOpen(true);
    };
  

  const handleRegister = async(e) => {
    e.preventDefault();
    const userid = localStorage.getItem("userId");
    try {
      const response = await fetch("https://e-cartbackend.onrender.com/addtosellers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userid,gstno,bank,address,ifc}),
      });

      if (response.ok) {
        openModal()
      }else {
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <section >
        <div className={`fixed inset-0 ${isModalOpen ? 'block' : 'hidden'} overflow-y-auto`}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-green-600 "></div>

        <div className="relative z-10 bg-white p-6 rounded-lg max-w-md" style={{borderRadius:"50%"}}>
          <div className="absolute top-0 right-0 p-4">
          </div>
          <div className=' m-5'>
          <h1 className='text-black text-center text-2xl font-bold'>Hurray</h1>
          <img
          src={img2}
          alt="ui/ux review check"
          className=' w-[70px] h-[50px] mx-auto my-3'
        />
         <h1 className='text-green-600 text-center text-2xl font-bold'>Congratulations <br></br><p className='text-red-900 font-bold'>You are now a Seller</p></h1>
         <img
          src={img1}
          alt="ui/ux review check"
          className=' w-[70px] h-[50px] mx-auto my-3'
        />
         <div className="mt-4 ">
                <a href='' className="cursor-pointer text-center font-bold text-blue-700"onClick={
              (e) => {
                closeModal()
              navigate('/addproducts')
              }
          }><h1>Add Products</h1></a>
        </div>
        </div>
        </div>
      </div>
    </div>
      <div className="container h-full px-6 mt-2">
        <div className="g-6 flex h-full flex-wrap items-center justify-center ">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-4/12 lg:w-6/12">
            <img
              src="https://m.media-amazon.com/images/G/31/selldot/illustrations/BoywithAmazonBox.svg"
              className="w-full "
              alt="Phone image"
              style={{height:"600px"}}
            />
          </div>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-50 rounded-lg border-gray-50 border-4 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Become a Seller
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleRegister}>
                <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GST no</label>
                        <input type="text" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required value={gstno}
                  onChange={(e) => setgstno(e.target.value)}/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Account no</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required  value={bank}
                  onChange={(e) => setbank(e.target.value)}/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">IFC Code</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required   value={ifc}
                  onChange={(e) => setifc(e.target.value)}/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="password" name="password" id="password" placeholder="Address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required   value={address}
                  onChange={(e) => setaddress(e.target.value)}/>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800" onClick={handleRegister}>Register</button>
                    
                </form>
            </div>
        </div>
    </div>
    </div>
        </div>
    </section>
  );
};

export default SellRegister;
