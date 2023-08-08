"use client"

function Lists({ name, desc, posts, lists}) {

  return (
    <section className="w-full">
      <span className="blue_gradient"><h1 className="head_text text-left">{name} Lists</h1></span>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt-layout">
      {lists?.map(list => (
        <div key={list._id}>{list.name}
        <div>
          {posts.map(post => ( 
            <div>
              {post.list === list._id && 
    <span>
                {post.list}
                {post.tag}
    </span>
              

              }
            </div>
        ))}</div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Lists