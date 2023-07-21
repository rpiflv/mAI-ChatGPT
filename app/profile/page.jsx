"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";

import { useRouter } from "next/navigation";
const MyProfile = () => {

    const {data: session} = useSession();

    const [posts, setPosts] = useState([])

    const handleEdit = () => {
    
    }

    const handleDelete = () => {

    }

    useEffect(() => {
        const fecthPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`)
          const data = await response.json();
    
          setPosts(data)
        }
        if (session?.user.id) fecthPosts();
      }, [])

  return (


    <Profile 
        name="My"
        desc="Welcome to your profile"
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile