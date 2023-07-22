"use client"

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick, searchText}) => {  
  const filteredData = data.filter(post => post.tag.includes(searchText) || post.prompt.includes(searchText))
  return (
    <div className="mt-16 prompt-layout">
      {filteredData.map(post => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          />
      ))}
    </div>
  )
}

function Feed() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    const fecthPosts = async () => {
      const response = await fetch("/api/prompt")
      const data = await response.json();
      setPosts(data)
    }
    fecthPosts();
  }, []);
  
  return (
    <section className="feed">
      <form
      className="relative w-full flex-center"
      >
        <input
          type="text"
          placeholder="search for a tag or a prompt"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
        searchText={searchText}
      />
    </section>
    )
}

export default Feed