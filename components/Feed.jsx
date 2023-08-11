"use client"

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick, setSearchText, searchText}) => {  
  const filteredData = data.filter(post => post.tag.includes(searchText) || post.prompt.includes(searchText))
  return (
    <div className="mt-16 prompt-layout">
      {filteredData.map(post => (
        <PromptCard 
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        setSearchText={setSearchText}
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
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
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
        handleTagClick={handleTagClick}
        searchText={searchText}
      />
    </section>
    )
}

export default Feed;