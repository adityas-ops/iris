import Header from "@/components/Header";
import Link from "next/link";


const ImageData = [
  "/images/home/good-faces-xb9zL5dcx1o-unsplash.jpg",
  "/images/home/pexels-yan-krukau-7314016.jpg",
  "/images/home/lhon-karwan-8amZqoeEhEE-unsplash.jpg",
  "/images/home/good-faces-PwcFaRXwvjE-unsplash.jpg"
]

export default function Home() {
  return (
    <>
      <div
        className=" my-0 w-full h-full" style={{
          paddingTop: "calc(10vmax / 10)",
          paddingBottom: "calc(10vmax / 10)",
        }}
      >
        <div className=" w-full md:h-[540px] h-[540px] overflow-hidden  relative  max-w-[1440px] mx-auto">
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
      {/* second  */}
      <div
        className=" w-full h-full bg-[#E8E1FD] "
        style={{
          paddingTop: "calc(10vmax / 10)",
          paddingBottom: "calc(10vmax / 10)",
        }}
      >
        <div className="w-full h-full max-w-[1440px] mx-auto relative sm:py-[54px] mt-[20px] md:mt-0 py-[35px]">
          <div className="w-full h-full  max-w-[1940px] mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className=" 3xl:h-[575px] md:h-[425px] md:w-[425px] w-[200px] h-[200px] sm:absolute top-[5%] right-[10%] 3xl:w-[575px] overflow-hidden  z-10">
              <img
                src="/images/home/valentin-sukhotskiy-pwxOntAF3pA-unsplash.jpg"
                className="  "
                alt="as"
              />
            </div>
            <div className="md:w-[70%] w-[90%] bg-transparent mx-[20px] mt-[50px] h-[270px] relative md:h-[460px] 3xl:h-[600px] z-0 overflow-hidden bg-white">
              <img
                src="https://images.squarespace-cdn.com/content/v1/642200bb5393b3746af0a1f1/0da99fc5-f486-4228-bcac-ca9a9ad615fe/Yellow+Pink+and+Purple+Trendy+Gradient+Quote+Motivational+Poster+%281%29.jpg?format=2500w"
                alt="w"
                style={{}}
                className=" object-center h-[270px]  sm:h-[460px]  2xl:h-[600px]  w-full"
              />
            </div>
            
            <div className=" md:absolute p-[35px] top-[40%] md:w-[584px] w-[90%] flex flex-col justify-evenly  mx-[20px]  left-[18%] h-[304px] md:h-[250px] z-40 bg-white">
            <div className=" w-full text-center  font-Roboto whitespace-pre-line ">
              <p className=" text-[14px] font-[300]">
                <strong className=" font-[600]">Iris</strong> • BEAUTY
              </p>
            </div>
            <div className=" mt-[2rem] w-full mb-[2rem]">
              <p className=" md:text-[2.5rem] text-[1.875rem] font-[700] font-Grotesque tracking-[1.75px] text-[#3F401B] text-center leading-[1.1] ">
              Share your true  beauty experiences.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* third section */}
      <div
        className=" my-0 w-full h-full mt-[40px]" style={{
          paddingTop: "calc(10vmax / 10)",
          paddingBottom: "calc(10vmax / 10)",
        }}
      >
        <div className=" w-full md:h-[540px] h-[540px] overflow-hidden  relative  max-w-[1440px] mx-auto">
          <div className=" absolute z-10 md:left-[3.5%] left-[5%] md:top-[8%] top-[40%] sm:p-[75px]  md:h-[380px] h-[250px] sm:w-[70%] md:w-[50%] w-[306px] bg-[#E8E1FD] flex  flex-col sm:justify-evenly justify-center items-center">
            <div className=" w-full text-center sm:mb-[16px] font-Roboto whitespace-pre-line ">
              <p className=" text-[14px] font-[300]">
                <strong className=" font-[600]">Iris</strong> • BEAUTY
              </p>
            </div>
            <div className=" mt-[2rem] w-full mb-[2rem]">
              <p style={{
                fontSize: "calc((2.6 - 1) * 1.2vw + 1rem)"
              }} className=" text-[1.875rem] font-[700] font-Grotesque tracking-[2.15px] text-[#3F401B] text-center leading-[1.1] ">
              The future of a personalized beauty journey.
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
          <div className=" absolute sm:right-[8%] right-[6%] z-0 top-0">
            <div className=" top-[5%] relative overflow-hidden bg-center sm:w-[600px] w-[306px] h-[310px] sm:h-[460px]">
              <img
                src="/images/home/donald-oliver-iBAVFKpRfrY-unsplash.jpg"
                className="   mx-auto my-auto absolute   object-contain object-cover h-full w-full "
                alt="as"
              />
            </div>
          </div>
        </div>
      </div>
      {/* fourth section */}
      <div className=" max-w-[95%] mx-auto">
        <p style={{
          fontSize:"calc((1.5 - 1) * 1.2vw + 1rem)"
        }} className=" whitespace-pre-wrap font-Grotesque text-[#3F401B] w-[70%] sm:w-[60%] md:w-[40%] ">Find the right beauty  products with Iris. </p>
        <div className="py-[2%] w-[98%] mx-auto sm:w-full h-full">
          <div className=" flex flex-wrap justify-between items-center">
                {
                    ImageData.map((item,index)=>{
                      return(
                        <>
                        <div key={index} className="md:w-[24%] sm:w-[290px] w-[180px] py-[10px]  md:my-[20px] md:h-[33vh] lg:h-[42vh]  gap-3  relative overflow-hidden">
                        <img src={item} alt="as" className="w-full h-full object-cover object-center"/>
                        </div>
                        </>
                      )
                    })
                }
          </div>
        </div>
      </div>
    </>
  );
}
