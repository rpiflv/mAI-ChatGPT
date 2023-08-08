"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import ListsCheckbox from "@components/ListsCheckbox";

const AddToList = ({params}) => {
  
  const {data: session} = useSession();

  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState("");

  const router = useRouter();
  // const params = useParams();

    useEffect(() => {
      const fecthLists = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/lists`);
        const data = await response.json();
        setLists(data)
      }
      if (session?.user.id) fecthLists();
    }, []);

    // const handleEdit = (post) => {
    //   router.push(`/update-prompt?id=${post._id}`)
    // }

    // const handleDelete = async (post) => {
    //   const hasConfirmed = confirm("Are you sure to delete?");
    //   if (hasConfirmed) 
    //   try {
    //     await fetch(`/api/prompt/${post._id}`, {
    //       method: "DELETE"
    //     });
    //     const filteredPosts = posts.filter(p => p._id !== post._id);
    //     setPosts(filteredPosts);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    const addToList = async (e) => {
      e.preventDefault();
      if (!selectedList) return alert("No list selected!");
      try {
          const response = await fetch(`/api/list/add/${params.promptID}`, {
              method: "PATCH",
              body: JSON.stringify({
                  listId: selectedList
              })
          })
          if(response.ok) {
              router.push("/lists/")
          }

      } catch(err) {
          console.log(err)
      }
  }


  return (
    <ListsCheckbox 
        name="My"
        desc="Select one of your lists"
        lists={lists}
        addToList={addToList}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
    />
  )
}

export default AddToList;