import Link from "next/link";
import React from "react";

function about() {
  return (
    <>
      <div
        style={{
          paddingTop: "calc(10vmax / 10)",
          paddingBottom: "calc(10vmax / 10)",
        }}
        className=" w-full h-full "
      >
        <div className=" max-w-[45%] pb-[2.5rem]  text-[#3F401A] mx-auto">
          <h3
            style={{
              fontSize: "calc((1.5 - 1) * 1.2vw + 1rem)",
            }}
            className=" font-Fira text-center tracking-[1.5px]  mb-[2rem] font-bold "
          >
            ✨Coming Soon✨
          </h3>
          <p className=" mt-[1rem] font-[300] font-Roboto text-center text-[18px] ">
          We welcome makeup enthusiasts of all skill levels to a thoughtful beauty space filled with authenticity, celebration, and learning. Iris provides a community that can share experiences, discover new trends, and get personalized beauty recommendations that work best for you!
          </p>
          <Link href="/" className="text-[18px] text-[#FF0C53] font-Roboto font-[300] ">
          <p className=" mt-[2rem] text-center ">JOIN THE WAITLIST </p>
          </Link>
        </div>
      </div>
      <div className=" bg-[#E8E1FD] w-full py-[3.3vmax] h-full">
     <div className=" max-w-[1440px] mx-auto w-full h-full ">
     <div className=" max-w-[81.25%] mx-auto w-full flex ">
            <div className="flex-[50%] flex order-1 justify-end items-center">
                <img 
                src="/images/about/iriswebsite-01+(1).png"
                className=" w-[500px] h-[500px] object-cover"
                alt="as"
                />
            </div>
            <div className="flex-[50%] flex justify-center items-center">
                
            </div>
      </div>
     </div>
      </div>
    </>
  );
}

export default about;
