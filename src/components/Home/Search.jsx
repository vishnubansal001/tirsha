const Search = () => {
  return (
    <div className="bg-gray-100 fixed w-full mt-[5rem] flex justify-center items-center">
      <div className="container mx-auto rounded-lg px-14 py-4">
        <form>
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-2 "
              type="text"
              placeholder="Search Blog"
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
