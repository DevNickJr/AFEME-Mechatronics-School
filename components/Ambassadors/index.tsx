import { IAmbassador } from '@/interfaces'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'

const Ambassadors = () => {
    const [ambassadors, setAmbassadors] = useState<IAmbassador[]>([])

    useEffect(() => {
      const fetchAmbassadors = async () => {
        try {
          const res = await fetch('/api/ambassadors')
          const data = await res.json()
          if (!res.ok) {
            throw new Error(data?.message || 'An error Occured')
          }
          setAmbassadors(data)
        } catch (error) {
          console.log({error})
        }
        
      }
  
      fetchAmbassadors()
    }, [])
  
    // console.log({ambassadors})
  return (
    <section className="pt-20 pb-20 text-center section">
      <div className="flex flex-col items-center max-w-3xl gap-4 mx-auto text-center">
        <h3 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">Management<br />Team</h3>
        <p>Welcome to our Management Team - a group of exceptional leaders whose remarkable achievements and unwavering commitment to excellence define our collective success. Carefully selected for their outstanding skills and dedication, each team member brings a wealth of experience and expertise to guide our organization towards new heights.</p>
      </div>
      <div className="flex flex-col gap-10 pt-12 md:gap-16">
        {ambassadors?.map((ambassador, index) => (
          <div key={index} className="flex flex-col gap-4 lg:gap-12 md:items-center lg:flex-row">
            <div className='flex flex-col gap-4 items-center justify-center text-center lg:text-left lg:items-start flex-[1_1_0%]'>
            <Image width={100} height={100} alt='' src={ambassador?.image} className="object-cover mx-auto rounded-full h-44 w-44 md:w-48 md:h-48 md:rounded-none md:mx-0 bg-black/10" />
              
              <div>
              {/* <h4 className="text-3xl font-bold">{ambassador?.name}</h4>
              <span className="text-xl font-bold text-primary">{ambassador?.title}</span> */}
              <h4 className="text-xl font-bold">{ambassador?.name}</h4>
                  <span className="text-sm font-extrabold text-primary">{ambassador?.title}</span>
              </div>
            </div> 
            <div className='text-[#6D6D6D] font-argentinum text-sm md:text-base md:text-left flex-[3_1_0%]' dangerouslySetInnerHTML={{ __html: ambassador?.description }}  />    
          </div>
        ))
        }
    </div>
   </section>
  )
}


export default Ambassadors

{/* 
 <div className="flex flex-col items-center gap-8 pt-12 md:flex-row md:justify-center">
<div key={index} className="flex flex-col justify-center max-w-sm gap-4">
            <Image width={100} height={100}  src={ambassador?.image} alt="" className="rounded-full h-44 w-44 md:w-48 md:h-48 lg:h-72 lg:w-72 bg-black/10" />
            <div>
              <h4 className="text-3xl font-bold">{ambassador?.name}</h4>
              <span className="text-xl font-bold text-primary">{ambassador?.title}</span>
            </div>
            <div key={index} className="flex flex-col gap-4 md:gap-12 md:flex-row">
              <div className='flex flex-col gap-4 items-center justify-center text-center md:text-left md:items-start flex-[1_1_0%]'>
                  <Image width={100} height={100} alt='' src={advisory?.image} className="object-cover mx-auto rounded-full h-44 w-44 md:w-48 md:h-48 lg:h-72 lg:w-72 md:rounded-none md:mx-0 bg-black/10" />
                <div>
                  <h4 className="mb-3 text-sm">{advisory?.name}</h4>
                  <span className="text-[#6D6D6D] text-sm font-extrabold">{advisory?.title}</span>
                </div>
              </div> 
              <div className='text-[#6D6D6D] font-argentinum text-sm md:text-base md:text-left flex-[3_1_0%]' dangerouslySetInnerHTML={{ __html: advisory?.description }}  />    
            </div>
          </div> */}