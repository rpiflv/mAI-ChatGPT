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
                        <div 
                        className="mb-[0.125rem] mr-[2rem] block min-h-[1.5rem] pl-[1.5rem]" 
                        key={list._id}>
                            <label
                                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                htmlFor="checkbox">
                                {list.name}  
                            <input
                            className="realtive ml-[1.5rem] checked:bg-blue-200"
                                // className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox"
                                name="list"
                                value={list._id}
                                id={list._id}
                                checked={selectedList === list._id} 
                                onChange={handleCheck}
                                />
                            </label>
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