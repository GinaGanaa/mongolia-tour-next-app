import { packages } from "@/utils/packageChoices";

export const PriceFooter = () => {
  return (
    <div className="relative min-w-[1000px]">
      <img className="w-full" src="./Price&Footer image.png" alt="" />
      <div className="absolute top-[50px] flex flex-col items-center w-full">
        <p className="text-[42px] font-semibold">Pricing of Our Agency</p>
        <p className="text-[20px] text-[#18181B] opacity-[70%]">
          Choose a package that's right for you
        </p>
      </div>
      <div className="flex absolute top-[200px] gap-[20px] left-[40px] right-[40px]">
        {packages.map((packages, index) => {
          const {
            packageType,
            price,
            coreOffering,
            transportationType,
            accommodation,
            guidedTour,
            meal,
          } = packages;
          return (
            <div className="bg-white rounded-[30px] h-[435px] ">
              <div className="pt-[20px] pl-[20px] pr-[20px]">
                <div className="flex items-center gap-[20px]">
                  <button>
                    <img className="w-[36px]" src="./heartIcon.png" alt="" />
                  </button>
                  <p className="text-[18px]">{packageType}</p>
                </div>
                <p className="text-[40px] font-medium">{price}</p>
                <p className="text-[#919191] text-[16px]">{coreOffering}</p>
                <p className="pt-[30px]">Includes:</p>
                <div className="flex gap-[20px] items-center">
                  <img className="w-[20px] h-[20px]" src="./check.png" alt="" />
                  <p className="text-[14px] pt-[10px]">{transportationType}</p>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img
                    className="w-[20px] h-[20px] "
                    src="./check.png"
                    alt=""
                  />
                  <p className="text-[14px] pt-[10px]">{accommodation}</p>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img className="w-[20px] h-[20px]" src="./check.png" alt="" />
                  <p className="text-[14px] pt-[10px]">{guidedTour}</p>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img className="w-[20px] h-[20px]" src="./check.png" alt="" />
                  <p className="text-[14px] pt-[10px]">{meal}</p>
                </div>
                <div className="">
                  <button className="bg-[#A4D1E2] w-[90%] rounded-[30px] h-[40px] text-[16px] font-semibold">
                    Select package
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-[30px] absolute bottom-5 left-10 ">
        <button className="flex items-center bg-white w-[167px] justify-center gap-[15px] rounded-[30px] font-extrabold text-[#6972B5]">
          <img className="w-[20px]" src="./FacebookIcon.png" alt="" />
          Facebook
        </button>
        <button className="flex items-center bg-white w-[167px] h-[44px] justify-center gap-[13px] rounded-[30px] text-[18px] font-extrabold text-[#6972B5]">
          {" "}
          <img className="w-[20px]" src="./InstagramIcon.png" alt="" />
          Instagram
        </button>
      </div>
    </div>
  );
};
