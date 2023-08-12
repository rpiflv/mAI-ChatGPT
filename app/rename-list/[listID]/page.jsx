"use client"

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from "next/link";


const RenameList = ({params}) => {

    const router = useRouter();
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [listName, setListName] = useState("");
    
    const renameList = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch(`/api/list/${params.listID}`, {
                method: "PATCH",
                body: JSON.stringify({
                    listName: listName,
                    userId: session?.user.id
                })
            })
            if(response.ok) {
                router.push('/lists');
            }
        } catch(error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    useEffect( () => {
      const fecthlist = async () =>{
        const response = await fetch(`/api/users/${session?.user.id}/lists`);
        const data = await response.json();
        const list = data.filter(list => list._id === params.listID);
        setListName(list[0]?.name);
      }
      fecthlist();
    }, [])

  return (
    <section className="w-full max-w-full flex-start flex-col">
        <p className="desc text-left max-w-md">
          Rename the list
        </p>
        {console.log(listName)}
        <form
        onSubmit={renameList}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7"
        >
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">Name:</span>
            <input 
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              placeholder={listName}
              required
              className="form_input"
            >
            </input>
          </label>
            <div className="flex-end mx-3 mb-5 gap-4">
                <Link href="/" className="text-gray-500 text-sm">
                  <button className="px-5 py-2 bg-gray-300 rounded-full text-white">
                Cancel</button>
                </Link>
                <button
                type="submit"
                  disabled={submitting}
                  className="px-5 py-1.5 bg-primary-orange rounded-full text-white"
                >
                  {submitting ? "Rename..." : "Rename"}
                </button>
            </div>
        </form>
    </section>
    )
}

export default RenameList;