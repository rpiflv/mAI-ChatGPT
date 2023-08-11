"use client"

function ListsCheckbox ({lists, name, desc, addToList, selectedList, setSelectedList}) {
    
    const handleCheck = (e) => 
        setSelectedList(e.target.value);

    return (
        <section className="w-full">
            <span className="blue_gradient"><h1 className="head_text text-left">Select a list</h1></span>
            <p className="desc text-left">{name} Lists</p><br/>
            <form onSubmit={addToList}>
                {lists?.map(list => (
                        <div key={list._id} className="flex items-center justify-center px-5 mb-3 pl-4 border border-blue-300/50 rounded-lg max-w-lg hover:bg-blue-200/50">
                        <input id={list._id} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        value={list._id} 
                        checked={selectedList === list._id} 
                        onChange={handleCheck}/>
                        <label htmlFor={list._id} className="w-full py-4 ml-2 text-sm font-medium text-gray-900">{list.name}</label>
                    </div>
                ))}
                <button type="submit"
                 className=" px-5 py-1.5 bg-blue-500 rounded-full text-white hover:cursor-pointer" >
                    Save</button>
            </form>
        </section>
    )
}

export default ListsCheckbox;