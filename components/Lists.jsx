"use client"

import PromptCard from "./PromptCard";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Lists({ name, desc, posts, lists, setLists, setPosts}) {
  const router = useRouter();

  const handleClickRemove = async (promptID) => {
    try {
      const response = await fetch(`/api/list/remove/${promptID}`, {
        method: "PATCH"
      })
      if(response.ok) {
        const filteredPosts = posts.filter(post => post._id !== promptID);
        setPosts(filteredPosts);
      }
    } catch(err) {
      console.log(err)
      }
  }

  const handleListDelete = async (listId) => {
    try {
      await fetch(`/api/list/${listId}`, {
        method: "DELETE"
      })
      const filteredLists = lists.filter(list => list._id !== listId);
      setLists(filteredLists);
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <section className="">
      <span className=""><h1 className="blue_gradient head_text text-left">{name} Lists</h1></span>
      <p className="desc text-left">{desc}</p>
      <div className="mt-5">
        {lists?.map(list => (
          <div key={list._id} className="">
            <span className="list_text">{list.name}</span> 
            <Link href={`/rename-list/${list._id}`}><button>Rename</button></Link>
            <button onClick={() => handleListDelete(list._id)}>Delete</button>
            <div className="prompt-layout">
              {posts.map(post => ( 
                <div key={post._id} className="">
                  {post.list === list._id && 
                    <PromptCard 
                    key={post._id}
                    post={post}
                    handleClickRemove={handleClickRemove}
                    />
                  }
                </div>
              ))}
              <br/>
            </div>
          </div>
        ))}
      </div>
      <Link href="/create-list/" className="text-gray-500 text-sm">
        <button className="px-5 py-2 bg-blue-500 rounded-full text-white">
        Create new list</button>
      </Link>
    </section>
  )
}

export default Lists;