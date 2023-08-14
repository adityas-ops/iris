import React from 'react'

function Term({text}) {
  return (
   <>
     <p style={{
        fontSize:"calc((1.1 - 1) * 1.2vw + 1rem)"
    }} className=' mt-[1rem]  leading-[1.6] font-[300] text-[#3f4019] font-Roboto'> {text}   </p>
   </>
  )
}

export default Term