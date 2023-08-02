"use client"

import { useState, useEffect } from "react";
import Profile from "@components/Profile";
import { useRouter } from "next/navigation";

const UserProfile = ({params}) => {
  
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

  return (
    <Profile 
        name={owner}
        desc={`Welcome to ${owner}'s profile`}
        posts={posts}
    />
  )
}

export default UserProfile;