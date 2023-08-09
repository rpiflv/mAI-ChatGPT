import PromptCard from "./PromptCard"

function Lists({ name, desc, posts, lists}) {

  return (
    <section className="w-full">
      <span className="blue_gradient"><h1 className="head_text text-left">{name} Lists</h1></span>
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
    </section>
  )
}

export default Lists