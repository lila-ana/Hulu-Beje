export default function HomeCarousel() {
  return (
    <div
      className="bg-cover p-[10px] my-4 justify-center items-center"
      style={{backgroundImage: "url('src/Assets/CarouselBg.jpg')"}}
    >
      <div className="grid grid-cols-2 justify-center">
        <div className=" flex flex-col col-span-1 justify-center items-center m-2">
          <div className="text-poller sm:text-[60px] md:text-[90px] font-poller justify-center items-center p-1 text-navyBlue">50% OFF</div>
          <div className="text-poller sm:text-[16px] md:text-[24px] font-quicksand font-extrabold p-1 pb-3">🌟 Big Savings Await! Get Ready for Our Spectacular Sale! 🌟</div>
          <div className="text-poller sm:text-[10px] md:text-[16px] font-quicksand font-medium p-1">
            <span className="font-semibold">Attention, savvy shoppers!</span> The deal of a lifetime is here, and you won't 
            want to miss it. Our e-commerce site is thrilled to offer you jaw-dropping 
            discounts, with over 50% off on a wide range of products!</div>
        </div>
        <div className="flex flex-col col-span-1 items-center justify-center">
          <img src="src/Assets/50.jpg" alt="off sale products" className="rounded-[10px] m-4" />
        </div>
      </div>
      
    </div>
  );
}

