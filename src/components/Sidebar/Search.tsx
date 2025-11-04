const Search = () => {
    return (
        <>
            <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
                <input 
                type="text"
                placeholder="Search"
                className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
                />
            </div>
        </>
    )
}
export default Search