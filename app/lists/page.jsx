"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import Lists from "@components/Lists";

const MyLists = () => {
  
  const {data: session} = useSession();

  const [posts, setPosts] = useState([]);
  const [lists, setLists] = useState([]);

  const router = useRouter();
  
  useEffect(() => {
      const fecthPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();
        setPosts(data)
      }
      if (session?.user.id) fecthPosts();
    }, []);

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


  return (
    <Lists 
        name="My"
        desc="Welcome to your lists"
        posts={posts}
        lists={lists}
        // handleEdit={handleEdit}
        // handleDelete={handleDelete}
    />
  )
}

export default MyLists;