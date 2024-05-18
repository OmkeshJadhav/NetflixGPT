const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className=" bg-black w-1/2 grid grid-cols-12 rounded-lg">
        <input
          type="search"
          placeholder="What would You Like To Watch Today ?"
          className="p-4 m-4 col-span-9 rounded-lg"
        />
        <button className=" px-4 m-4 bg-red-500 text-white rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
