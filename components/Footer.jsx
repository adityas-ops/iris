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
        className=" bg-[#FF0C54]  w-full "
      >
        <div className=" w-full relative py-[30px] sm:py-0 ">
         
            <div className=" w-full h-full flex items-center justify-center">
              <div className="sm:w-[70%] w-full sm:pb-[50px] flex sm:flex-row  flex-col">
                <div className="sm:w-[190px] w-full flex flex-wrap sm:block">
                  <p className=" font-Fira w-[40%] font-bold tracking-[2px] ml-[20px] sm:ml-[10px] text-white text-[24px] ">
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
                <div className=" mx-auto sm:mx-0">
                 <img src="https://images.squarespace-cdn.com/content/v1/642200bb5393b3746af0a1f1/f675f7a4-68ea-4ddd-9ba8-96a0ca58f5a7/Temporary+App+Icon.png?format=300w" className="ml-[10px] sm:h-[88px] h-[200px] mt-[40px]  sm:mt-[12px]" alt="as" />
                 </div>
                </div>
                {/* second column  */}
                <div className=" flex sm:mt-0  mt-[40px]">
              <div className=" sm:ml-[40px] ml-4 h-full w-[190px]">
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
              <div className=" w-[190px]  ml-0 sm:ml-[40px]">
              <Link href="/about" className=" font-Roboto font-[300] mb-[1rem] uppercase underline text-white">
                    <p  className=" mb-[1rem] mt-[7px]" style={{
                        fontSize:"calc((0.9) - 1) * 1.2vw + 1rem)"
                    }}>About</p>
                </Link>
                <Link href="/about" className=" font-Roboto font-[300] mb-[1rem] uppercase underline text-white">
                    <p  className=" sm:my-[2rem] my-[1rem]" style={{
                        fontSize:"calc((0.9) - 1) * 1.2vw + 1rem)"
                    }}>terms of service</p>
                </Link>
                <Link href="/partner" className=" font-Roboto font-[300]  uppercase underline text-white">
                    <p   className=" mb-[1rem] mt-0 sm:mt-[7px]" style={{
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
      </div>
    </>
  );
}

export default Footer;
