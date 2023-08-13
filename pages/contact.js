import Link from "next/link";
import React from "react";

function contact() {
  return (
   <div className="w-full h-full bg-[#E8E1FD] " >
     <div className="w-full py-[4vh] text-[#3F401A] bg-white">
      <div className=" max-w-[44%] mx-auto ">
        <h4
          className=" font-bold tracking-[1.5px] mb-[2rem] font-Fira"
          style={{
            fontSize: "calc((1 - 1) * 1.2vw + 1rem)",
          }}
        >
          Contact us
        </h4>
        <p className=" font-Roboto font-[300] " style={{
            fontSize:"calc((1.1 - 1) * 1.2vw + 1rem)"
        }}>
        Please email us with questions or comments - 
        <Link href="/" className=" underline underline-offset-4 text-[#FF0C53]">
        hello@getiris.app
        </Link>
        </p>
      </div>
    </div>
    <div className=" bg-[#E8E1FD] h-[31vh] w-full"></div> 
   </div>
  );
}

export default contact;
