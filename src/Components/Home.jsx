import Product1 from "./functions/Product1"
import Product2 from "./functions/Product2";
import Product3 from "./functions/Product3";
import Carousel from "./functions/Carousel";
import './css/product.css'
import Home1 from "./Images/Home3.jpg"
import Home2 from "./Images/Home4.jpg"
import Home3 from "./Images/Home1.webp"
import Home4 from "./Images/Home2.webp"


function Home() {
  

    return (
      <div>
        <img className="Home1" src={Home4} alt="image description" />
        <img className="Home1 mb-3" src={Home1} alt="image description" />
      <div className="mt-10">     
      <Carousel />
      <img className="Home1 my-5" src={Home2} alt="image description" />
       <Product1 />
       <Product2 />
       <img className="Home1 my-5" src={Home3} alt="image description" />
       <Product3 />
      </div>
      </div>
    );
  }
  
  export default Home;
  