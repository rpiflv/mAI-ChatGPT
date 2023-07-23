"use client"

import { useState, useEffect } from "react";
// no need this file
// import { useSession } from "next-auth/react";
import Profile from "@components/Profile";

import { useRouter } from "next/navigation";
const UserProfile = ({params}) => {
  
  // const {data: session} = useSession();

  const [posts, setPosts] = useState([]);
  const [owner, setOwner] = useState('');

  const router = useRouter();
  
  useEffect(() => {
      const fecthPosts = async () => {
        const response = await fetch(`/api/users/${params.id}/posts`);
        const data = await response.json();
        setOwner(data[0].creator.username)
        setPosts(data)
      }
      if (params.id) fecthPosts();
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
    <Profile 
        name={owner}
        desc="Welcome to your profile"
        data={posts}
        // handleEdit={handleEdit}
        // handleDelete={handleDelete}
    />
  )
}

export default UserProfile;