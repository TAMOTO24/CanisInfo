export default function BreedNav() {
  return (
    <div className="flex items-center w-full">
      <p className="text-5xl whitespace-nowrap ">All Dog Breeds</p>
      <div className="flex mt-2 justify-center w-full">
        <input
          className="border-4 border-[#f1e6d7] bg-white rounded-l-[20px] p-4 w-[30%] focus:outline-none"
          placeholder="Search dog breeds..."
        />
        <button className="bg-[#f1e6d7]  px-5 rounded-r-[20px]">
          Search
        </button>
      </div>
      <div className="bg-black w-20 h-20"></div>
    </div>
  );
}