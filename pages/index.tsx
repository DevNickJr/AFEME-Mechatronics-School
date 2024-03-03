import Head from "next/head";
import { FormEvent, useEffect, useReducer, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from "@/components/Button";
import Image from "next/image";
import HeroImg from '@/assets/img1.png'
import QualifiedImg from '@/assets/img2.png'
import HeroBg from '@/assets/hero-bg.png'
import PrimaryImg from '@/assets/primary.png'
import Primary1Img from '@/assets/primary-1.png'
import SecondaryImg from '@/assets/school.png'
import UniversityImg from '@/assets/university.png'
import PostGradImg from '@/assets/postgraduate.png'
import TeacherImg from '@/assets/teacher.png'
import StudentImg from '@/assets/student.png'
import AmazedImg from '@/assets/amazed.png'
import NewsImg from '@/assets/news.png'
import GradImg from '@/assets/graduation.png'
import { BiCircle } from 'react-icons/bi'
import Link from "next/link";
import { IAdvisory, ICandidate, ICms, INews, IReducerAction } from '@/interfaces'
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import Ambassadors from "@/components/Ambassadors";
import Advisory from "@/components/Advisory";
import Winners from "@/components/Winners";
import dbConnect from '@/lib/dbConnection';
import CmsModel from '@/models/CmsModel';
import AdvisoryModel from '@/models/AdvisoryModel';
import NewsModel from '@/models/NewsModel';
import { useRouter } from "next/router";
import NewsCard from "@/components/NewsCard";
import { AiOutlineCheck } from "react-icons/ai";
import appConfig from "@/configs/app.config";



// const initialState: ICandidate = {
//   email: '',
//   name: '',
//   number: '',
//   category: '',
// }

// type IAction = 'email' | 'name' | 'number' | 'category' | 'reset'

export default function Home({ cms, advisory, news }: { cms: ICms, advisory: IAdvisory[], news: INews[] }) {
  const router = useRouter()
  // const [data, setData] = useState<ICms | null>(null)
  //   const [candidate, dispatch] = useReducer((state: ICandidate, action: IReducerAction<IAction>) => {
  //     if (action.type === 'reset') return initialState
  //     return { ...state, [action.type]: action.payload }
  // }, initialState)


  // const { loading, error, data: applicationData, post } = usePost({ 
  //   api: "/candidates",
  //   onSuccess: () => {
  //       toast('Your application has been submitted successfully')
  //       dispatch({ type: 'reset'})
  //   } 
  // })



  // const addCandidate = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   post(candidate)
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`/api/cms`)
  //       const data = await res.json()
        
  //       if (!res.ok) throw new Error(data.message)

  //       // console.log({data})
  //       setData(data[0])
  //     } catch (error) {
  //       console.log({error})
  //     }
  //   }

  //   fetchData()
  // }, [])

  // console.log(news.slice(0, 2))


  return (
    <div>
      <Head>
        <title>{appConfig.appName}</title>
        <meta name="description" content="A school management Platform" />
        <link rel="icon" href="/faviconimg.png" />
      </Head>
      <div className="">
        {/* {loading && <Loader modalOpen={true} />} */}
        <Header />
        <section className="pb-12 overflow-hidden section top-section lg:min-h-screen lg:mt-0 lg:pt-40">
          <div className="grid gap-8 lg:grid-cols-2 md:gap-12">
            <div className="flex flex-col order-2 gap-4 lg:order-1">
              {/* <p className="mb-3 text-lg font-bold text-primary">STUDY WITH US</p> */}
              <h1 className="mb-3 text-4xl font-extrabold capitalize md:text-6xl">{cms?.hero?.header}</h1>
              <p className="md:text-lg">{cms?.hero?.text}</p>
              <Link href ="/contact-us" className="flex items-center justify-between max-w-md text-sm bg-gray-100 rounded-xl md:text-base">
                <p className="ml-4">Lets get started</p>
                {/* <a href={`/about`} className="px-6 py-3 text-sm text-white grad-to-right md:text-base rounded-xl w-fit">Connect with us</a> */}
                <Button className="px-5 py-3 text-white rounded-xl md:py-4">Connect with us</Button>
              </Link>
            </div>
            <div className="relative flex flex-col justify-end order-1 w-full min-h-96 lg:order-2">
              <Image width={100} height={100} src={cms?.hero?.image || HeroImg} alt="" className="object-contain object-top w-full h-full max-h-[450px]" />
              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full -z-10">
                <Image src={HeroBg} alt="" width={200} height={200} className="w-64 sm:w-1/2 md:w-5/6" />
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center gap-2 py-12 mt-4">
            <span className="w-4 h-1 text-xs border-none rounded-full text-primary bg-primary" />
          </div> */}
        </section>
        <section className="section">
          <div className="grid gap-4 lg:grid-cols-2 md:gap-12">
            <div className="flex flex-col flex-1 order-2 gap-4 lg:order-1">
              {/* <p className="mb-3 text-xl font-bold text-primary">About Us</p> */}
              <h2 className="mb-3 text-4xl font-extrabold capitalize md:text-6xl">{cms?.about?.header}</h2>
              <p className="mb-4 md:text-lg">{cms?.about?.text}</p>
              <Button onClick={() => router.push('/about-us')} className="px-5 py-3 text-sm text-white w-fit rounded-xl md:py-4 md:text-base">Read More</Button>

            </div>
            <div className="relative flex flex-col justify-end order-1 w-full h-full min-h-96 lg:order-2">
              <Image width={100} height={100} src={cms?.about?.image || QualifiedImg} alt="" className="object-contain w-full max-h-[500px]" />
              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full -z-10">
                <Image src={HeroBg} alt="" width={200} height={200} className="w-64 sm:w-1/2 md:w-5/6" />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="flex flex-col items-center gap-4 px-4 py-12 text-white section md:py-20 grad-to-right">
          <div className="flex flex-col items-center max-w-3xl gap-4 text-center">
            <h3 className="mb-2 text-3xl font-extrabold capitalize md:text-5xl">Looking for a bright new future. It starts here</h3>
            <p className="mb-4">We understand that you&#39;re looking for a bright new future, filled with endless possibilities and opportunities for personal and professional growth. Your quest for a better tomorrow starts right here, with us.</p>
            <button className="p-5 px-6 py-3 text-sm font-bold text-black bg-white rounded-full md:py-5 md:text-base md:px-10">Get in Touch</button>
          </div>
        </section> */}
        <section className="py-12 text-center section md:py-20">
          <div className="flex flex-col items-center max-w-2xl gap-4 mx-auto mb-12">
            {/* <h2 className="text-2xl font-bold text-primary">Our Programmes</h2> */}
            <h3 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">
              Courses we Offer
            </h3>
          </div>
          <div className="grid gap-8 text-white md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center w-full gap-3 p-8 py-12 bg-primary rounded-2xl">
              <Image src={Primary1Img} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-xl font-extrabold capitalize">Automotive Mechatronics Technology</h5>
              <p className="text-white">Explore the Future of Automotive Innovation and Technology Integration.</p>
            </div>
            <div className="flex flex-col items-center w-full gap-3 p-8 py-12 bg-primary rounded-2xl">
              <Image src={UniversityImg} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-xl font-extrabold capitalize">Electrical Electronics Technology Department</h5>
              <p className="text-white">Empowering the Future through Cutting-edge Electrical and Electronics Expertise.</p>
            </div>
            <div className="flex flex-col items-center w-full gap-3 p-8 py-12 bg-primary rounded-2xl">
              <Image src={PostGradImg} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-xl font-extrabold capitalize">Welding And Fabrication Department</h5>
              <p className="text-white">Crafting Excellence in Welding and Fabrication Techniques for a Solid Foundation.</p>
            </div>


            {/* <div className="flex flex-col items-center w-full gap-3 p-8 py-12 bg-primary rounded-2xl">
              <Image src={Primary1Img} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Primary Education</h5>
              <p className="text-white"> The Automotive Mechatronics Technology</p>
            </div>
            <div className="flex flex-col items-center w-full gap-3 p-8 py-12 bg-primary rounded-2xl">
              <Image src={SecondaryImg} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Secondary Education</h5>
              <p className="text-white">Preparing Students for Success in a Dynamic World</p>
            </div>
            <div className="flex flex-col items-center w-full gap-3 p-8 py-12 bg-primary rounded-2xl">
              <Image src={UniversityImg} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Undergraduate Education</h5>
              <p className="text-white">Unlocking Your Potential for Advanced Learning</p>
            </div>
            <div className="flex flex-col items-center w-full gap-3 p-8 py-12 bg-primary rounded-2xl">
              <Image src={PostGradImg} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Postgraduate Education</h5>
              <p className="text-white">Elevate Your Expertise and Propel Your Career Forward</p>
            </div> */}
          </div>
        </section>
        {/* <section className="py-12 section md:py-20">
          <div className="flex flex-col items-center max-w-xl gap-4 mx-auto mb-12 text-center">
            <h3 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">Which One is Suitable For You</h3>
            <p>Are you a student that needs a scholarship? or a teacher who wish to Upgrade his/her Knowledge </p>
          </div>
          <div className="flex flex-col items-center gap-8 lg:flex-row md:justify-center">
            <div className="flex flex-col justify-center max-w-md p-4 px-6 py-8 shadow-xl md:p-20 rounded-xl">
              <div className="flex flex-col justify-center max-w-sm gap-4 mb-8 text-center">
                <Image src={StudentImg} alt="" className="mx-auto rounded-full h-44 w-44" />
                <h4 className="text-xl font-bold md:text-2xl">Student</h4>
              </div>
              <div className="flex flex-col gap-3 mb-12 text-sm font-bold md:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Financial support for education expenses</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Access to quality education opportunities</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Personal and professional growth opportunities</p>
                </div>
              </div>
              <Button className="px-5 py-3 mx-auto text-sm font-semibold text-white rounded-full md:px-8 w-fit md:py-4 md:text-base whitespace-nowrap">View Details</Button>
            </div>
            <div className="flex flex-col justify-center max-w-md p-4 px-6 py-8 text-white shadow-xl md:p-20 rounded-xl grad-to-right">
              <div className="flex flex-col justify-center max-w-sm gap-4 mb-8 text-center">
                <Image src={TeacherImg} alt="" className="mx-auto rounded-full h-44 w-44" />
                <h4 className="text-xl font-bold md:text-2xl">Teacher</h4>
              </div>
              <div className="flex flex-col gap-3 mb-12 text-sm font-bold md:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Professional development support</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Enhanced teaching quality</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Networking and collaboration opportunities</p>
                </div>
              </div>
              <Button gradient='bg-white' className="px-5 py-3 mx-auto text-sm font-semibold bg-white rounded-full md:px-8 w-fit text-primary md:py-4 md:text-base whitespace-nowrap">View Details</Button>
            </div>
          </div>
        </section> */}
       {/* <Ambassadors /> */}
        
        {/* <Winners /> */}
        {/* <section className="py-12 section md:py-20 grad-to-right">
          <div className="grid gap-4 text-white lg:grid-cols-2 md:gap-12">
            <div className="flex flex-col flex-1 gap-4 md:pb-16">
              <h2 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">Become Part of Us on Our Platform</h2>
              <p className="mb-4 md:text-lg">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education because of his or her financial status, since it is the fundamental right of every child to receive  qualitative and functional education</p>
              <div className="grid grid-cols-2 gap-5 mb-4 max-w-fit">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold text-white flex-[0_0_32px] flex justify-center items-center">
                      <AiOutlineCheck className="" />
                    </div>
                    <p>Primary Education</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold text-white flex-[0_0_32px] flex justify-center items-center">
                      <AiOutlineCheck className="" />
                    </div>
                    <p>Secondary Education</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold text-white flex-[0_0_32px] flex justify-center items-center">
                      <AiOutlineCheck className="" />
                    </div>
                    <p>Undergraduate Education</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold text-white flex-[0_0_32px] flex justify-center items-center">
                      <AiOutlineCheck className="" />
                    </div>
                    <p>Postgraduate Education</p>
                  </div>
              </div>
              <a href={`/about`} className="px-6 py-3 text-sm text-white bg-gold md:text-base rounded-xl w-fit">Apply Now</a>
            </div>
            <div className="w-full h-full min-h-96 md:min-h-[500px] relative flex justify-center items-center">
              <div className="absolute -z-0 flex justify-center items-center bg-gold rounded-full w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]"></div>
              <Image src={GradImg} alt="" className="relative z-10 object-cover w-full h-full" />
            </div>
          </div>
        </section> */}
        <section className="py-12 section md:py-20 grad-to-right">
          <div className="grid gap-4 text-white lg:grid-cols-2 md:gap-12">
            <div className="flex flex-col flex-1 gap-4 md:pb-16">
              <h2 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">Explore Our Departments and Courses</h2>
              <p className="mb-4 md:text-lg">Discover the diverse courses offered by our three main departments, providing a comprehensive foundation for your educational journey.</p>

              {/* Automotive Mechatronics Technology Department */}
              <div className="mb-2">
                <h3 className="mb-3 text-xl font-bold capitalize">Automotive Mechatronics Technology Department</h3>
                {/* <p>FIRST SEMESTER</p>
                <ul>
                  <li>Use of English - GNS 101</li>
                  <li>Entrepreneurship Development - END 101</li>
                  <li>Algebra and Elementary Trigonometry - MTH 101</li>
                </ul>
                <p>SECOND SEMESTER</p>
                <ul>
                  <li>Innovation and Acquisition of Technology - WFC 102</li>
                  <li>Calculus - MTH 102</li>
                  <li>Engineering Materials - WFC 104</li>
                </ul> */}
              </div>

              {/* Electrical Electronics Technology Department */}
              <div className="mb-2">
                <h3 className="mb-3 text-xl font-bold capitalize">Electrical Electronics Technology Department</h3>
                {/* <p>FIRST SEMESTER</p>
                <ul>
                  <li>Basics of Communication - CSK 501</li>
                  <li>Algebra and Elementary Trigonometry - MAT 101</li>
                  <li>Technical Drawing - MEC 102</li>
                </ul>
                <p>SECOND SEMESTER</p>
                <ul>
                  <li>Logic and Linear Algebra - MAT 112</li>
                  <li>Circuit Theory I - EET 121</li>
                  <li>Electronics II - EET 123</li>
                </ul> */}
              </div>

              {/* Welding And Fabrication Department */}
              <div>
                <h3 className="mb-3 text-xl font-bold capitalize">Welding And Fabrication Department</h3>
                {/* <p>FIRST SEMESTER</p>
                <ul>
                  <li>Basics of Communication Skills - CSK 501</li>
                  <li>Citizen Education - GNS</li>
                  <li>Algebra and Elementary Trigonometry - MTH 101</li>
                </ul>
                <p>SECOND SEMESTER</p>
                <ul>
                  <li>Logic and Linear Algebra - MTH 112</li>
                  <li>Computer Aided Design (CAD) - COM 201</li>
                  <li>Electronics II - EET 123</li>
                </ul> */}
              </div>

              <a href={`/about`} className="px-6 py-3 text-sm text-white bg-gold md:text-base rounded-xl w-fit">Discover</a>
            </div>
            <div className="w-full h-full min-h-96 md:min-h-[500px] relative flex justify-center items-center">
              <div className="absolute -z-0 flex justify-center items-center bg-gold rounded-full w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]"></div>
              <Image src={GradImg} alt="" className="relative z-10 object-cover w-full h-full" />
            </div>
          </div>
        </section>

        <section className="py-12 section md:py-20">
          <h2 className="mb-12 text-3xl font-extrabold text-center capitalize md:text-5xl">News & <br />Updates</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {news?.slice(0, 3).map( (item, index) => (
              <NewsCard key={index} news={item} />
            ))}
          </div>
          {/* <div className="grid gap-8 md:grid-cols-3">
            {news?.slice(0, 3).map( (item, index) => (
            <Link href="/news" key={index} className="flex flex-col w-full gap-2 shadow-md place-self-start rounded-xl">
              <Image src={item?.image || NewsImg} width={150} height={150} alt="" className="relative z-10 object-cover w-full h-64 rounded-xl" />
              <div className="p-2 px-4 pb-4">
                <h3 className="mb-3 overflow-hidden text-xl font-bold font-argentinum h-14">{item?.title}</h3>
                <p className="h-12 mb-3 overflow-hidden text-xs">{item?.snippet}</p>
                <span className="text-xs font-bold text-primary">
                  Read more
                </span>
              </div>
            </Link>
            ))}
          </div> */}
        </section>
        {/* <section className="py-12 section md:py-20 grad-to-right">
          <div className="grid gap-4 text-white lg:grid-cols-2 md:gap-12">
            <div className="flex flex-col flex-1 gap-4">
              <h3 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">Sign up for Our Scholarship Program Now</h3>
              <p className="mb-4 text-sm md:text-base">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education because of his or her financial</p>
            </div>
            <form className="flex flex-col flex-1 w-full gap-4 text-black" onSubmit={addCandidate}>
              <input required onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} value={candidate?.name} className="p-4 px-5 text-sm rounded-full md:p-5 md:px-8" type="text" name="name" id="name" placeholder="Full Name" />
              <input required onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} value={candidate?.email} className="p-4 px-5 text-sm rounded-full md:p-5 md:px-8" type="email" name="email" id="email" placeholder="Enter your email address" />
              <input required onChange={(e) => dispatch({ type: 'number', payload: e.target.value })} value={candidate?.number} className="p-4 px-5 text-sm rounded-full md:p-5 md:px-8" type="tel" name="number" id="number" placeholder="Enter your Phone Number" />
              <select required onChange={(e) => dispatch({ type: 'category', payload: e.target.value })} value={candidate?.category} className="p-4 px-5 text-sm rounded-full md:p-5 md:px-8 text-black/60" name="category" id="category">
                <option className="text-black/60" value="">Select category</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
              </select>
              <button className="px-8 py-4 text-sm font-medium text-white bg-black rounded-full md:text-base md:px-12 md:py-4 w-fit">Sign Up</button>
            </form>
          </div>
        </section> */}
          <section id="signup" className="flex flex-col items-center gap-4 px-4 py-12 text-white section md:py-20 grad-to-right">
          <div className="flex flex-col items-center max-w-3xl gap-4 text-center">
            <h3 className="mb-2 text-3xl font-extrabold capitalize md:text-5xl">Sign up for Our Scholarship Program Now</h3>
            <p className="mb-4">We understand that you&#39;re looking for a bright new future, filled with endless possibilities and opportunities for personal and professional growth. Your quest for a better tomorrow starts right here, with us.</p>
            <Link href={'/contact-us'} className="p-5 px-6 py-3 text-sm font-bold text-black bg-white rounded-full md:py-5 md:text-base md:px-10">Sign Up</Link>
          </div>
        </section>
        <Advisory advisory={advisory} />
        <Footer />
      </div>
    </div>
  );
}


export const getServerSideProps = async () => {
  let cms = {}
  let advisory = []
  let news = []
  try {
      await dbConnect()
      const res = await CmsModel.findOne({}).lean();
      cms = JSON.parse(JSON.stringify(res))

      const response = await AdvisoryModel.find({}).lean();
      advisory = JSON.parse(JSON.stringify(response))

      const news_res = await NewsModel.find({}).sort('-createdAt').lean();
      // console.log({news_res})
      news = JSON.parse(JSON.stringify(news_res))
      
  } catch (error) {
      console.log(error)
      return {
          props: {
              cms: {},
              news: [],
              advisory: [],
              status: 'failed'
          }
      }
  }


  return {
      props: {
          cms,
          advisory,
          news,
          status: 'success'
      }
  }
}