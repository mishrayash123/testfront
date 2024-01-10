import React, { useState ,useEffect} from 'react';


const Slider = () =>{
    const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // Assuming there are 5 slides
  };

  useEffect(() => {
    setInterval(nextSlide, 10000);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 6) % 6);
  };

  const items = [
    <img key={1} src="https://marketplace.canva.com/EAFKG4KiOj4/1/0/1600w/canva-black-yellow-bold-bag-fashion-sale-banner-mbZi15kP9Yg.jpg" alt="Kitten 1"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={2} src="https://marketplace.canva.com/EAFKG4KiOj4/1/0/1600w/canva-black-yellow-bold-bag-fashion-sale-banner-mbZi15kP9Yg.jpg" alt="Kitten 1"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={3} src="https://png.pngtree.com/thumb_back/fh260/background/20201108/pngtree-blak-friday-sale-background-with-illustration-of-online-shope-mobile-phone-image_456310.jpg" alt="Kitten 1"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={4} src="https://png.pngtree.com/background/20210714/original/pngtree-black-friday-sale-banner-background-with-shopping-cart-and-gift-box-picture-image_1242738.jpg" alt="Kitten 2"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={5} src="https://png.pngtree.com/background/20210714/original/pngtree-black-friday-sale-background-design-template-banner-discount-vector-poster-business-picture-image_1227059.jpg" alt="Kitten 3"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={6} src="https://static.vecteezy.com/system/resources/previews/006/309/295/non_2x/flash-sale-banner-background-special-offer-template-design-for-media-promotion-and-social-media-business-post-vector.jpg" alt="Kitten 2"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
    <img key={7} src="https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg" alt="Kitten 3"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>,
  ];


  const slideButtons = Array.from({ length: 6 }, (_, i) => (
    <button
      key={i}
      type="button"
      className={`w-3 h-3 rounded-full ${
        i === currentIndex ? 'bg-white' : 'bg-white/30 dark:bg-gray-800/30'
      }`}
      aria-current={i === currentIndex}
      aria-label={`Slide ${i + 1}`}
      onClick={() => setCurrentIndex(i)}
    ></button>
  ));

    return (
        <div>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden  md:h-96">
        {items.map((item,index) => (
          <div
            key={index}
            className={` duration-700 ease-in-out ${
              index - 1 === currentIndex ? 'block' : 'hidden'
            }`}
            data-carousel-item
          >
          {item}
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slideButtons}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
        </div>
    )
}

export default Slider;