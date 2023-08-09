import PromptCard from "./PromptCard";
import Link from "next/link";

function Lists({ name, desc, posts, lists}) {

  return (
    <section className="w-full">
      <span className=""><h1 className="blue_gradient head_text text-left">{name} Lists</h1></span>
      <p className="desc text-left">{desc}</p>
      <div className="flex mt-10 flex-col">
        {lists?.map(list => (
          <div key={list._id} className="relative w-full flex-row">
            <span className="list_text mb-10">{list.name}</span> 
            <div className="columns-1 md:columns-2
             lg:columns-3 mb-10 mt-5 flex-row">
              {posts.map(post => ( 
                <div key={post._id} className="mr-5">
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