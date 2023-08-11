import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className=" my-0 w-full h-full"
        style={{
          paddingTop: "calc(10vmax / 10)",
          paddingBottom: "calc(10vmax / 10)",
        }}
      >
        <div className=" w-full md:h-[540px] h-[540px] overflow-hidden  relative  max-w-[1940px] mx-auto">
          <div className=" absolute z-10 md:right-[3.5%] right-[5%] md:top-[8%] top-[40%] sm:p-[75px] p-[37px] md:h-[380px] h-[340px] sm:w-[70%] md:w-[50%] w-[306px] bg-[#E8E1FD] flex  flex-col justify-evenly items-center">
            <div className=" w-full text-center mb-[16px] font-Roboto whitespace-pre-line ">
              <p className=" text-[14px] font-[300]">
                <strong className=" font-[600]">Iris</strong> • BEAUTY
              </p>
            </div>
            <div className=" mt-[2rem] w-full mb-[2rem]">
              <p className=" md:text-[2.75rem] text-[1.875rem] font-[700] font-Grotesque tracking-[2.15px] text-[#3F401B] text-center leading-[1.1] ">
                Beauty discovery made easy.
              </p>
            </div>
            <div className="w-full text-center">
              <Link
                href="/"
                className=" font-Roboto text-[#ff0b53] underline uppercase tracking-[0.4px]"
              >
                join the waitlist
              </Link>
            </div>
          </div>
       <div className=" absolute sm:left-[8%] left-[6%] z-0 top-0">
       <div className=" top-[5%] relative overflow-hidden bg-center sm:w-[600px] w-[306px] h-[310px] sm:h-[460px]">
          <img 
          src="/images/home/taylor-heery-n-mFag43IPo-unsplash.jpg"
          className="   mx-auto my-auto absolute   object-contain object-cover h-full w-full "
          alt="as"
          />
          </div>
        </div>
       </div>
      </div>
      <div className=" w-full h-full bg-[#E8E1FD]"  style={{
          paddingTop: "calc(10vmax / 10)",
          paddingBottom: "calc(10vmax / 10)",
        }}>

      </div>
    </>
  );
}
