import { myValues } from "@/data/About";

export default function MyValues() {
  return (
    <div className="p-4 text-black  bg-gray-100 rounded-2xl border mt-[6vh] md:mt-[2vh] flex flex-col">
      <h1 className="flex justify-center text-4xl font-black mb-2 text-blue-700">
        My KeyPoints
      </h1>
      {myValues.map((favorite, i: number) => {
        return (
          <div key={i} className="mx-4 my-3">
            <h3 className="mb-2 text-2xl font-bold text-blue-800">
              {i + 1}. {favorite.title}
            </h3>
            <p className="text-xl"> ✅ {favorite.detail}</p>
          </div>
        );
      })}
    </div>
  );
}
