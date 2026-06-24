export default function DogList(props) {
  const { breeds, dogCategory } = props;

  const filteredDogs = breeds.filter((item) => {
    if (!dogCategory || dogCategory === "all breeds") return true;
    return item.category === dogCategory;
  });
  console.log(filteredDogs);

  return (
    <div className="grid grid-cols-4 gap-10 w-[100%] grid-rows-[32vh] items-start">
      {filteredDogs.map((dog) => (
        <div
          key={dog._id}
          className="flex border-4 border-[#f2e9df] flex-col rounded-2xl overflow-auto bg-[#fff9f4]"
        >
          <img
            src={dog.image_url}
            onError={(e) => {
              e.target.src = "/IMG/Image_not_available.png";
            }}
            alt="dd"
            className="h-80 object-cover"
          />
          <div className="text-2xl text-center m-5">{dog.name}</div>
        </div>
      ))}
    </div>
  );
}
