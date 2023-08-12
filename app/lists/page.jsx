"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Lists from "@components/Lists";

const MyLists = () => {
  
  const {data: session} = useSession();

  const [posts, setPosts] = useState([]);
  const [lists, setLists] = useState([]);
  
  useEffect(() => {
      const fecthPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();
        setPosts(data);
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

  return (
    <Lists 
        name="My"
        desc="Welcome to your lists"
        posts={posts}
        lists={lists}
        setLists={setLists}
        setPosts={setPosts}
    />
  )
}

export default MyLists;