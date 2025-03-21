import { destinations } from "@/utils/roadmap";

export const Roadmap = () => {
  return (
    <div className="relative min-w-[1000px]">
      <img className="w-full" src="./RoadmapImage.png" alt="" />
      <div className="absolute top-1 pt-[70px] left-1/3 flex flex-col items-center">
        <h1 className="text-[42px] font-bold">Destination of Our Agency</h1>
        <h2 className="text-[24px] text-[#18181B] text-opacity-70">
          Pack Your Bags And Get Ready
        </h2>
      </div>
      <div className="flex">
        <div className="flex flex-col items-start gap-4 absolute top-[200px] left-[10%] right-[10%] w-full">
          {destinations.map((destination, index) => {
            const { name, location, day, id, label } = destination;
            const buttonColors = [
              "bg-[#EEE9D9]",
              "bg-[#8BB8C1]",
              "bg-[#AAD8D7]",
              "bg-[#8BC0BD]",
              "bg-[#97CCE0CC]",
            ];

            return (
              <div className="w-full sm:w-[50%] md:w-[40%] lg:w-[40%] xl:w-[50%]">
                <button
                  key={id}
                  className={`px-4 py-2 ${buttonColors[index]} text-white rounded-[120px] pl-[30px] hover:bg-opacity-90 border-[3px] border-transparent hover:border-white w-full h-[80px] opacity-[0.8]`}
                >
                  <div className="flex justify-between gap-[10px]">
                    <div>
                      <p className="text-[20px] text-black font-semibold">
                        {name}
                      </p>
                      <div className="flex gap-[10px]">
                        <img
                          className="h-[14px]"
                          src="/locationIcon.svg"
                          alt=""
                        />
                        <p className="text-[12px] text-black">{location}</p>
                      </div>
                    </div>

                    <div className="bg-white text-black rounded-full w-[48px] h-[48px] flex items-center justify-center">
                      <p className="text-[14px] font-semibold">{day}</p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
