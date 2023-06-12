import { useEffect, useState } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Table from '@/components/Table'
import { IWinner } from "@/interfaces"
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';



const Winners = () => {
  const [data, setData] = useState<IWinner[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { loading: posting, error, post, data: deleted } = usePost({ 
    api: "/winners",
    method: "DELETE",
    onSuccess: () => {
        toast('Winner deleted successfully')
    } 
})

const deleteWinner = (id: string, route: string) => {
    post({
      id,
    }, route)
}




const colums = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "category",
    label: "Category",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "position",
    label: "Position",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "delete",
    label: "Action",
    extra: true,
    custom: (val: string, meta: any) => {
      return  (
        <div className="gap-4 justify-center">
          <button onClick={() => deleteWinner(meta?._id, `winners/${meta?._id}`)} className="p-2 px-4 bg-red-600 text-white rounded-full">Delete</button>
          {/* <BiEdit size="1.2rem" className="text-orange" />
          <MdOutlineDelete size="1.2rem" className="text-red-400" /> */}
        </div>
      )
    },
  },
];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/winners`)
        const data = await res.json()
        
        if (!res.ok) throw new Error(data.message)

        console.log({data})
        setData(data)
      } catch (error) {
        console.log({error})
      }
      setLoading(false)

    }

    fetchUser()
  }, [deleted])

  return (
    <AdminLayout>
      <Head>
        <title>Brilliant Brains</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconimg.png" />
      </Head>
      {(loading || posting) && <Loader modalOpen={true} />}
      <div className='p-4 py-12 sm:px-12 h-full overflow-y-auto'>
        <div className="flex items-center gap-4 justify-between mb-16">
            <h1 className='text-3xl text-black/70 font-argentinum'>Winners</h1>
            <Button onClick={() => router.push("/admin/winners/add")} className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">Add Winners</Button>
        </div>
        <Table<IWinner> data={data} columns={colums} className={''} />
      </div>
    </AdminLayout>
  );
}


export default AuthHOC(Winners)
// h-full overflow-y-auto

