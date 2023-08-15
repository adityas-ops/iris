import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isClicked, setIsClicked] = useState(false);
  

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className=" relative z-[20]  w-full md:py-[1vw] py-[6vw] px-[6vw] md:px-[4vw] pointer-events-auto">
      <div className=" max-w-[1800px] w-full mx-auto">
        <div className=" flex h-full items-center">
          <div className="md:flex hidden  h-full  items-center  ">
            <Link
              href="/"
              className="mr-[2vw] relative w-[21px] text-black h-[21px]"
            >
              <Image
                src="/images/header/instagram.svg"
                width={21}
                height={21}
              />
            </Link>

            <Link href="/" className="mr-[2vw] w-[21px] text-black h-[21px]">
              <Image src="/images/header/twitter.svg" width={21} height={21} />
            </Link>
            <Link href="/" className="mr-[2vw] w-[21px] text-black h-[21px]">
              <Image src="/images/header/tiktok.svg" width={21} height={21} />
            </Link>
            <Link href="/" className="mr-[2vw] w-[21px] text-black h-[21px]">
              <Image src="/images/header/pintrest.svg" width={21} height={21} />
            </Link>
          </div>
          {/* hemburgr */}
          <button className="relative w-[10%] md:hidden" onClick={handleClick}>
            {isClicked ? (
              <>
                <div className="w-[27px] h-[1px] absolute mb-[10px] bg-black transform rotate-45 origin-center transition-transform" />
                <div className="w-[27px] h-[1px] absolute bg-black transform -rotate-45 origin-center transition-transform" />
              </>
            ) : (
              <>
                <div className="w-[35px] h-[1px] mb-[10px] bg-black transition-transform" />
                <div className="w-[35px] h-[1px] bg-black transition-transform" />
              </>
            )}
          </button>
          {/* main */}
          <div className="flex w-[80%]  md:w-[70%]    flex-col justify-center content-center ">
            <div className="  flex items-center justify-center">
              <Link
                href="/"
                className=" font-bold text-center tracking-[1.5px] w-full font-Fira text-[#3F401A]"
                style={{ fontSize: "calc((3 - 1) * 1.2vw + 1rem)" }}
              >
                Iris
              </Link>
            </div>
            <div className="mt-[1.1vw] hidden  text-[#3F401A]  text-center  md:flex justify-center">
              <nav className="flex  justify-center">
                <div className=" mx-[1vw]">
                  <Link href="/about">ABOUT</Link>
                </div>
                <div className=" mx-[1vw] ">
                  <Link href="/contact">CONTACT</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {
        isClicked && (<>
            <div className=" fixed z-20 bg-white   top-[11%] w-full left-[-0.1%]  h-[90vh]">
        <div className="w-full h-[86%] text-[#3F401A]  flex flex-col justify-center">
          <Link
            href="/about"
            className=" text-[2.125rem] px-[1rem] my-[4vw] mx-[5vw] font-Roboto"
            onClick={()=>{
              setIsClicked(false)
            }}
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className=" text-[2.125rem] px-[1rem] my-[4vw] mx-[5vw] font-Roboto"
            onClick={()=>{
              setIsClicked(false)
            }}
          >
            CONTACT
          </Link>
        </div>
        <div className="flex  h-[60px]   mx-[24px]    ">
          <Link
            href="/"
            className="mr-[2.5vw] relative w-[30px] text-black h-[30px]"
          >
            <Image src="/images/header/instagram.svg" width={30} height={30} />
          </Link>

          <Link href="/" className="mr-[2.5vw] w-[30px] text-black h-[30px]">
            <Image src="/images/header/twitter.svg" width={30} height={30} />
          </Link>
          <Link href="/" className="mr-[2.5vw] w-[30px] text-black h-[30px]">
            <Image src="/images/header/tiktok.svg" width={30} height={30} />
          </Link>
          <Link href="/" className="mr-[2.5vw] w-[30px] text-black h-[30px]">
            <Image src="/images/header/pintrest.svg" width={30} height={30} />
          </Link>
        </div>
      </div>
        </>)
      }
      
    </div>
  );
}

export default Header;
