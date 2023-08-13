import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div
        style={{
          paddingTop: "calc(38vmax / 10)",
          paddingBottom: "calc(38vmax / 10)}",
        }}
        className=" bg-[#FF0C54]  w-full h-full"
      >
        <div className=" w-full relative ">
         
            <div className=" w-full h-full flex items-center justify-center">
              <div className="w-[70%] pb-[50px] flex ">
                <div className="w-[190px]">
                  <p className=" font-Fira font-bold tracking-[2px] ml-[10px] text-white text-[24px] ">
                    {" "}
                    Iris
                  </p>
                  <div className="flex text-white  ">
                    <Link
                      href="/"
                      className="  flex justify-start w-[40px] h-[40px]"
                    >
                      <img src="/images/footer/svgexport-10.png" />
                    </Link>
                    <Link href="/" className=" w-[40px]  h-[40px]">
                      <img src="/images/footer/svgexport-11.png" />
                    </Link>
                    <Link href="/" className=" w-[40px]  h-[40px]">
                      <img src="/images/footer/svgexport-12.png" />
                    </Link>
                    <Link href="/" className=" w-[40px]  h-[40px]">
                      <img src="/images/footer/svgexport-13.png" />
                    </Link>
                  </div>
                  <img src="https://images.squarespace-cdn.com/content/v1/642200bb5393b3746af0a1f1/f675f7a4-68ea-4ddd-9ba8-96a0ca58f5a7/Temporary+App+Icon.png?format=300w" alt="as"  className=" ml-[10px] h-[88px] mt-[12px]"/>
                </div>
                {/* second column  */}
              <div className=" ml-[40px] h-full w-[190px]">
                <Link href="/join" className=" font-Roboto font-[300] mb-[1rem] uppercase underline text-white">
                    <p  className=" mb-[1rem] mt-[7px]" style={{
                        fontSize:"calc((0.9) - 1) * 1.2vw + 1rem)"
                    }}>Join The waitlist</p>
                </Link>
                <div  className=" mt-[rem] font-Roboto font-[300]  uppercase underline text-white">
                    <p style={{
                        fontSize:"calc((0.9) - 1) * 1.2vw + 1rem)"
                    }}>IRIS - APP COMING SOON</p>
                </div>
              </div>
              {/* third column */}
              <div className=" w-[190px] ml-[40px]">
              <Link href="/about" className=" font-Roboto font-[300] mb-[1rem] uppercase underline text-white">
                    <p  className=" mb-[1rem] mt-[7px]" style={{
                        fontSize:"calc((0.9) - 1) * 1.2vw + 1rem)"
                    }}>About</p>
                </Link>
                <Link href="/about" className=" font-Roboto font-[300] mb-[1rem] uppercase underline text-white">
                    <p  className=" my-[2rem]" style={{
                        fontSize:"calc((0.9) - 1) * 1.2vw + 1rem)"
                    }}>terms of service</p>
                </Link>
                <Link href="/partner" className=" font-Roboto font-[300] mb-[1rem] uppercase underline text-white">
                    <p  className=" mb-[1rem] mt-[7px]" style={{
                        fontSize:"calc((0.9) - 1) * 1.2vw + 1rem)"
                    }}>
                        iris partner program
                    </p>
                </Link>
              </div>
              </div>
              
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
