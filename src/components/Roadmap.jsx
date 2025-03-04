import { destinations } from "@/utils/roadmap";

export const Roadmap = () => {
  return (
    <div className="relative">
      <img className="w-full" src="./RoadmapImage.png" alt="" />
      <div className="absolute top-1 pt-[70px] left-1/3 flex flex-col items-center">
        <h1 className="text-[42px] font-bold">Destination of Our Agency</h1>
        <h2 className="text-[24px] text-[#18181B] text-opacity-70">
          Pack Your Bags And Get Ready
        </h2>
      </div>
      <div>
        <div className="flex flex-col items-center gap-4 absolute">
          {destinations.map((destination, index) => {
            const { name, location, day } = destination;

            return (
              <button
                key={index}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-[50%]"
              >
                <div className="flex justify-between gap-[10px]">
                  <div>
                    <p>{name}</p>
                    <div>
                      <img
                        className="h-[14px]"
                        src="/locationIcon.svg"
                        alt=""
                      />
                      <p>{location}</p>
                    </div>
                  </div>
                  <p>{day}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
