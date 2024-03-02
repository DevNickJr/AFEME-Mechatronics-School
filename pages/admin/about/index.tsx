import { FormEvent, useEffect, useReducer, useState } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { IAboutUs, IReducerAction } from '@/interfaces'
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import useImage from '@/hooks/useImage';
import Image from 'next/image';


const initialState: IAboutUs = {
    _id: null,
    first_section: {
        text: '',
        image: '',
    },
    second_section: {
        text: '',
        image: '',
    },
    third_section: '',
}

type IAction = 'first_section' | 'second_section' | 'third_section' | 'update'

const EditAbout = () => {
    const [loading, setLoading] = useState(false)
    const [about, dispatch] = useReducer((state: IAboutUs, action: IReducerAction<IAction>) => {
        if (action.type === 'update' && typeof action.payload !== 'string') {
            return { ...state, ...action.payload }
        }
        return { ...state, [action.type]: action.payload }
    }, initialState)
    const { url: sec1Image, uploadImage, error: errorImage, progress, setError, loading: uploadingImage } = useImage()
    const { url: sec2Image, uploadImage: uploadSec2Image, error: errorSec2Image, loading: uploadingSec2Image } = useImage()

    // console.log({about})

    const router = useRouter()
    const { loading: posting, error, data, post } = usePost({ 
        api: `/about/${about._id}`,
        method: 'PATCH',
        onSuccess: () => {
            toast('Updated successfully')
            fetchData()
        }
    })

    const updateSection2 = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post({
            second_section: about.second_section
        })
    }
    const updateSection3 = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post({
            third_section: about.third_section
        })
    }

    const updateSection1 = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post({
            first_section: about.first_section
        })
    }

    
    useEffect(() => {
        if (sec1Image) {
            dispatch({ type: 'first_section', payload: { ...about.first_section, image: sec1Image } })
        }
    }, [sec1Image])

    useEffect(() => {
        if (sec2Image) {
            dispatch({ type: 'second_section', payload: { ...about.second_section, image: sec2Image } })
        }
    }, [sec2Image])

    
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/about`)
        const data = await res.json()
        
        if (!res.ok) throw new Error(data.message)

        // console.log({data})
        dispatch({ type: 'update', payload: data[0] })
      } catch (error) {
        console.log({error})
      } finally {
        setLoading(false)
      }
    }

    useEffect(() => {
        fetchData()
      }, [])



    return (
        <AdminLayout>
        <Head>
            <title>Brilliant Brains</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/faviconimg.png" />
        </Head>
        {(posting || loading || uploadingImage || uploadingSec2Image) && <Loader modalOpen={true} />}
        <div className='h-full p-4 py-12 overflow-y-auto sm:px-12'>
            {/* <div className="flex items-center justify-between gap-4 mb-16">
                <h1 className='text-3xl text-black/70 font-argentinum'>Content Management System</h1>
            </div> */}
            <section className="pb-10 border-b">
                <h1 className='mb-6 text-2xl text-black/70 font-argentinum'>Section 1</h1>
                <form className="flex flex-col gap-4" onSubmit={updateSection1}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="text" className="text-black/70">text</label>
                        <textarea rows={5} required onChange={(e) => dispatch({ type: 'first_section', payload: {...about.first_section, text: e.target.value } })} value={about?.first_section?.text} name="text" id="text" className="p-2 border rounded-md border-black/20" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-black/70">Image</span>
                        {/* <label className="border border-black/20 rounded-md p-2 min-h-[42px] max-h-12 whitespace-nowrap overflow-hidden bg-white" htmlFor="image">
                            click to change Image
                        </label> */}
                         {about?.first_section?.image &&
                            <Image width={100} height={100} src={about?.first_section?.image} alt="" className="relative z-10 object-cover w-24 h-24 bg-gray-100" />
                         }
                        <input type='file' name='image' id='image' className='' onChange={(e) => uploadImage(e.target.files![0])} />
                        {/* {uploadingImage && <p>Uploading Image {progress}%</p>} */}
                    </div>
                    <div className="flex items-center gap-4">
                        <Button type='submit' className="px-4 py-2 text-sm text-white sm:px-6 rounded-xl">Update</Button>
                    </div>
                </form>
            </section>
            <section className="py-10 border-b">
                <h1 className='mb-6 text-2xl text-black/70 font-argentinum'>Section 2</h1>
                <form className="flex flex-col gap-4" onSubmit={updateSection2}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="text" className="text-black/70">text</label>
                        <textarea rows={5} required onChange={(e) => dispatch({ type: 'second_section', payload: { ...about.second_section, text: e.target.value } })} value={about?.second_section?.text} name="text" id="text" className="p-2 border rounded-md border-black/20" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-black/70">Image</span>
                        {/* <label className="border border-black/20 rounded-md p-2 min-h-[42px] max-h-12 whitespace-nowrap overflow-hidden bg-white" htmlFor="image">
                            {about?.about?.image ? about?.about?.image : ''}
                        </label> */}
                         {about?.second_section?.image &&
                            <Image width={100} height={100} src={about?.second_section?.image} alt="" className="relative z-10 object-cover w-24 h-24 bg-gray-100" />
                         }
                        <input type='file' name='image' id='image' className='' onChange={(e) => uploadSec2Image(e.target.files![0])} />
                        {/* {uploadingImage && <p>Uploading Image {progress}%</p>} */}
                    </div>
                    <div className="flex items-center gap-4">
                        <Button type='submit' className="px-4 py-2 text-sm text-white sm:px-6 rounded-xl">Update</Button>
                    </div>
                </form>
            </section>
            <section className="py-10 border-b">
                <h1 className='mb-6 text-2xl text-black/70 font-argentinum'>Section 3</h1>
                <form className="flex flex-col gap-4" onSubmit={updateSection3}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="text" className="text-black/70">text</label>
                        <textarea rows={5} required onChange={(e) => dispatch({ type: 'third_section', payload: e.target.value })} value={about?.third_section} name="text" id="text" className="p-2 border rounded-md border-black/20" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button type='submit' className="px-4 py-2 text-sm text-white sm:px-6 rounded-xl">Update</Button>
                    </div>
                </form>
            </section>
        </div>
        </AdminLayout>
    );
}


export default AuthHOC(EditAbout)

// export async function getServerSideProps() {
//     let data
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`)
//         data = await res.json()
        
//         if (!res.ok) throw new Error(data.message)

//         // console.log({data})
    
//       } catch (error) {
//         console.log({error})
//         return {
//             props: {
//                 status: 'error',
//                 about: data ? data[0] : {}
//             }
//         }
//       }

//     return {
//         props: {
//             status: 'success',
//             about: data ? data[0] : {}
//         }
//     }

// }
