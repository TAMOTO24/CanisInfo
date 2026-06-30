export default function DogList(props) {
  const { breeds, dogCategory, listType } = props;

  const gridType = "grid grid-cols-4 grid-rows-[32vh]";
  const rowType = "flex flex-col";

  const filteredDogs = breeds.filter((item) => {
    if (!dogCategory || dogCategory === "all breeds") return true;
    return item.category === dogCategory;
  });

  return (
    <div
      className={`${listType === "grid" ? gridType : rowType} group-hover gap-2 w-[100%] items-start h-[1000px]`}
    >
      {filteredDogs.map((dog) => (
        <div
          key={dog._id}
          className={`
        border-4 border-[#f2e9df] rounded-2xl bg-[#fff9f4]
        transition-all duration-300 overflow-hidden w-full
        ${listType === "grid" ? "flex flex-col" : "flex flex-row items-center"}
      `}
        >
          <img
            src={dog.image_url}
            onError={(e) => {
              e.target.src = "/IMG/Image_not_available.png";
            }}
            alt={dog.name}
            className={
              listType === "grid"
                ? "w-full h-80 object-cover"
                : "w-60 h-40 object-cover flex-shrink-0"
            }
          />

          <div className="text-2xl p-5">{dog.name}</div>
        </div>
      ))}
    </div>
  );
}
