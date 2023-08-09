"use client"

function ListsCheckbox ({lists, name, desc, addToList, selectedList, setSelectedList}) {
    
    const handleCheck = (e) => 
        setSelectedList(e.target.value);

    return (
        <section className="w-full">
            <span className="blue_gradient"><h1 className="head_text text-left">{name} Lists</h1></span>
            <p className="desc text-left">{desc}</p><br/>
            <form onSubmit={addToList}>
                {lists?.map(list => (
                        // <div className="mflex items-center mb-4" key={list._id}>
                        //     <label
                        //         className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        //         htmlFor={list._id}>
                        //         {list.name}  
                        //     <input
                        //     className="w-4 h-4 text-gray-500 bg-gray-100 rounded focus:ring-blue-500 focus:ring-2 hover:cursor-pointer"
                        //         type="checkbox"
                        //         name="list"
                        //         value={list._id}
                        //         id={list._id}
                        //         checked={selectedList === list._id} 
                        //         onChange={handleCheck}
                        //         />
                        //     </label>
                        // </div>
                        <div class="flex items-center justify-center px-5 mb-3 pl-4 border border-gray-300 rounded-lg max-w-lg hover:bg-gray-300">
                        <input id={list._id} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        value={list._id} 
                        checked={selectedList === list._id} 
                        onChange={handleCheck}/>
                        <label htmlFor={list._id} class="w-full py-4 ml-2 text-sm font-medium text-gray-900">{list.name}</label>
                    </div>
                ))}
                <button type="submit"
                 className=" px-5 py-1.5 bg-blue-800 rounded-full text-white hover:cursor-pointer" >
                    Add</button>
            </form>
        </section>
    )
}

export default ListsCheckbox;