import PromptCard from "./PromptCard";


function Profile({ name, desc, data, handleDelete, handleEdit }) {
  return (
    <section className="w-full">
      <span className="blue_gradient"><h1 className="head_text text-left">{name} Profile</h1></span>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt-layout">
      {data.map(post => (
        <PromptCard 
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handleDelete && handleDelete(post)}
          />
      ))}
    </div>
    </section>
  )
}

export default Profile