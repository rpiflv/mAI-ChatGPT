import Link from "next/link"

function FormList({type, listName, setListName, submitting, handleSubmit}) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
        <p className="desc text-left max-w-md">
          {type} a new list of prompts
        </p>
        <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7"
        >
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">Name:</span>
            <input 
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              placeholder="write the name of the list here..."
              required
              className="form_input"
            >
            </input>
          </label>
            <div className="flex-end mx-3 mb-5 gap-4">
                <Link href="/" className="text-gray-500 text-sm">
                  <button className="px-5 py-2 bg-gray-300 rounded-full text-white">
                Cancel</button>
                </Link>
                <button
                type="submit"
                  disabled={submitting}
                  className="px-5 py-1.5 bg-primary-orange rounded-full text-white"
                >
                  {submitting ? `${type}... ` : type}
                </button>
            </div>
        </form>
    </section>
  )
}

export default FormList