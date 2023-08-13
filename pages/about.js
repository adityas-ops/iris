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
          <p className=" mt-[1rem] font-[300] font-Roboto text-center leading-[1.5] text-[18px] ">
            We welcome makeup enthusiasts of all skill levels to a thoughtful
            beauty space filled with authenticity, celebration, and learning.
            Iris provides a community that can share experiences, discover new
            trends, and get personalized beauty recommendations that work best
            for you!
          </p>
          <Link
            href="/"
            className="text-[18px] text-[#FF0C53] font-Roboto font-[300] "
          >
            <p className=" mt-[2rem] text-center ">JOIN THE WAITLIST </p>
          </Link>
        </div>
      </div>
      <div className=" bg-[#E8E1FD] w-full py-[3.3vmax] h-full">
        <div className=" max-w-[1440px] mx-auto w-full h-full ">
          <div className=" max-w-[81.25%] mx-auto w-full flex ">
            <div className="flex-[62%] flex order-1 justify-center items-center">
              <img
                src="/images/about/iriswebsite-01+(1).png"
                className=" w-[500px] h-[500px] object-cover"
                alt="as"
              />
            </div>
            <div className="flex-[45%] text-[#3F401A] order-2 flex flex-col justify-center items-center">
              <h3
                style={{
                  fontSize: "calc((1.5 - 1) * 1.2vw + 1rem)",
                }}
                className=" font-bold font-Fira tracking-[1.5px]"
              >
                Our goal for the Iris community
              </h3>
              <p className=" text-center font-Roboto  font-[300]  leading-[1.5] text-[18px] mt-[2vh]">
                Iris is a new app that is a destination for all beauty
                enthusiasts who value authenticity and want to share their
                beauty journey with others. Iris is a beauty space for those
                passionate about finding the right products and building a
                community you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-[3.3vmax] pb-[5.3vmax] w-full h-full">
        <div className="max-w-[61%] mx-auto w-full font-[300] leading-[2] font-Roboto text-[#3F401A] h-full">
The Iris Vision - <strong className=" font-bold">Our Vision is to be the world&apos;s most trusted source in beauty. </strong>
Our community guidelines are designed to help all beauty enthusiasts create meaningful connections, and express themselves openly to share real experiences. We believe that beauty-lovers deserve their own little corner of the internet. We want Iris to be a safe space for all beauty enthusiasts to feel supported, trusted and appreciated. We appreciate your genuine support and help building the Iris community. 
 <p className="mt-[20px]">See Iris&apos;s <Link className=" text-[#FF0C53] underline underline-offset-4" href="https://www.getiris.app/community-guidelines">Community Guidelines</Link></p>
        </div>
      </div>
    </>
  );
}

export default about;
