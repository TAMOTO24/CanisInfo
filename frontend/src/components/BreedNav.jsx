export default function BreedNav(props) {
  const { listType, setListType } = props;

  const btn = "p-2";
  const chosen = "bg-[#f1e6d7]";
  const getImgClass = (type) => `${listType === type ? chosen : ""} ${btn}`;
  const tableClick = (type) => {
    if (type != listType) setListType(type);
  };

  return (
    <div className="flex items-center w-full">
      <p className="text-5xl whitespace-nowrap ">All Dog Breeds</p>
      <div className="flex mt-2 justify-center flex-1">
        <input
          className="border-4 border-[#f1e6d7] bg-white rounded-l-[20px] p-4 w-[40%] focus:outline-none"
          placeholder="Search dog breeds..."
        />
        <button className="bg-[#f1e6d7]  px-5 rounded-r-[20px]">Search</button>
      </div>
      <div className="flex bg-[#fff9f4] rounded-2xl overflow-hidden">
        <img
          src="IMG/row.png"
          onClick={() => tableClick("row")}
          width="70"
          className={getImgClass("row")}
        />
        <img
          src="IMG/grid.png"
          onClick={() => tableClick("grid")}
          width="70"
          className={getImgClass("grid")}
        />
      </div>
    </div>
  );
}
