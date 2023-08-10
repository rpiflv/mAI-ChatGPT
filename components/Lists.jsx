import PromptCard from "./PromptCard";
import Link from "next/link";

function Lists({ name, desc, posts, lists}) {

  return (
    <section className="">
      <span className=""><h1 className="blue_gradient head_text text-left">{name} Lists</h1></span>
      <p className="desc text-left">{desc}</p>
      <div className=" mt-10 ">
        {lists?.map(list => (
          <div key={list._id} className="">
            <span className="list_text">{list.name}</span> 
            <div className="prompt-layout">
              {posts.map(post => ( 
                <div key={post._id} className="">
                  {post.list === list._id && 
                    <PromptCard 
                    key={post._id}
                    post={post}
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

export default Lists