"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";

import { useRouter } from "next/navigation";
const MyProfile = () => {
  
  const {data: session} = useSession();

  const [posts, setPosts] = useState([]);

  const router = useRouter();
  
  useEffect(() => {
      const fecthPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await response.json();
  
        setPosts(data)
      }
      if (session?.user.id) fecthPosts();
    }, []);

    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = (post) => {

    }


  return (
    <Profile 
        name="My"
        desc="Welcome to your profile"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile;