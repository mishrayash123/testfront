import img1 from "../Images/sell1.jpg"
import img2 from "../Images/sell2.png"


const Main = ()=>{

    return(
      <div>
      <main className="dark:bg-gray-800 bg-white relative overflow-hidden  mx-5">
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 ">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Become a seller on
                    <span className="text-5xl sm:text-7xl text-fuchsia-800">
                        E-Cart
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Why sell on Amazon ? (Receive timely payments, Reach crores of customers, Stress-free delivery)
                </p>
                <div className="flex mt-8">
                    <a href="/registerforsell" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                       Start Selling
                    </a>
                </div>
            </div>
            <div className="hidden  sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src={img2} className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
</main>
<section className="px-3 py-5 bg-neutral-100 lg:py-10">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div className="order-1 lg:order-1">
            <img className="h-80 w-80  lg:w-[500px] lg:h-[500px]" src={img1} alt="" />
        </div>
        <div className="order-2 lg:order-2 flex flex-col justify-center items-center">
            <p className="text-3xl font-bold md:text-5xl text-orange-600">Before you start selling</p>
            <p className="mt-2 text-sm md:text-lg">Now before you start selling, you need to have all your details and documents handy. Here is the checklist of all that is required to start registering as an E-Cart seller :</p>
            <ul class="list-disc mt-2 font-bold">
            <li>Email ID</li>
            <li>Active Mobile Number</li>
            <li>GST Number or PAN Details</li>
            <li>Active Bank Account</li>
            </ul>
            <a href="/registerforsell" className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-5 hover:bg-zinc-800">Sell Now</a>
        </div>
    </div>
</section>
      </div>  
    )
}


export default Main;