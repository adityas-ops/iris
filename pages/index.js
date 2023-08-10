import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="my-[32px]"
        style={{
          paddingTop: "calc(10vmax / 10)",
          paddingBottom: "calc(10vmax / 10)",
        }}
      >
        <div className=" w-full h-[540px]  relative  max-w-[1940px] mx-auto">
          <div className=" absolute z-10 right-[3.5%] top-[8%] p-[75px] h-[380px] w-[50%] bg-[#E8E1FD]">
            <div className=" w-full text-center mb-[16px] font-Roboto whitespace-pre-line ">
              <p className=" text-[14px] font-[300]">
                <strong className=" font-[600]">Iris</strong> • BEAUTY
              </p>
            </div>
            <div className=" mt-[2rem] w-full mb-[2rem]">
              <p className=" text-[2.75rem] font-[700] font-Grotesque tracking-[2.15px] text-[#3F401B] text-center leading-[1.1] ">
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
       <div className=" absolute left-[8%] z-0 top-0">
       <div className=" top-[5%] relative overflow-hidden bg-center w-[600px] h-[460px]">
          <img 
          src="/images/home/taylor-heery-n-mFag43IPo-unsplash.jpg"
          className="  absolute top-[-30%] mx-auto my-auto object-center object-cover w-auto h-auto "
          alt="as"
          />
          </div>
        </div>
       </div>
      </div>
    </>
  );
}
