export default function BreedCategories(props) {
  const { dogCategory, setDogCategory } = props;

  const categories = [
    "all breeds",
    "Small",
    "Medium",
    "Large",
    "Working",
    "Herding",
    "Non-Sporting",
    "Terrier",
    "Toy",
  ];

  return (
    <div className="rounded-2xl flex flex-col gap-5 w-[20%] bg-[#fff9f4] text-left p-[1%]">
      <p className="text-3xl text-left font-extrabold">Categories</p>
      {categories.map((item) => (
        <input
          key={item}
          className={`text-2xl flex-1 text-left text-black-100 rounded-2xl p-3 transition delay-150 duration-300 ease-in-out ${
            dogCategory === item ? " bg-[#f2e6d7]" : ""
          }`}
          type="button"
          value={item}
          onClick={(e) => setDogCategory(e.target.value)}
        />
      ))}
    </div>
  );
}
