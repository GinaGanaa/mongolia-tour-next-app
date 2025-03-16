import { packages } from "@/utils/packageChoices";

export const PriceFooter = () => {
  return (
    <div className="relative min-w-[1000px]">
      {/* Header Section */}
      <img className="w-full" src="./Price&Footer image.png" alt="Pricing" />
      <div className="absolute top-[50px] flex flex-col items-center w-full">
        <p className="text-[42px] font-semibold">Pricing of Our Agency</p>
        <p className="text-[20px] text-[#18181B] opacity-[70%]">
          Choose a package that's right for you
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex absolute top-[200px] gap-[20px] left-[40px] right-[40px] justify-center">
        {packages.map((plan, index) => {
          const {
            packageType,
            price,
            coreOffering,
            transportationType,
            accommodation,
            guidedTour,
            meal,
          } = plan;

          const priceValue = parseInt(price.replace("$", "").trim());

          return (
            <div
              key={index}
              className="bg-white rounded-[30px] h-[435px] flex flex-col p-[20px]"
            >
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-[20px]">
                  <button>
                    <img className="w-[36px]" src="./heartIcon.png" alt="" />
                  </button>
                  <p className="text-[18px]">{packageType}</p>
                </div>

                <p className="text-[40px] font-medium">{price}</p>
                <div className="flex justify-between">
                  <p className="text-[#919191] text-[16px]">{coreOffering}</p>
                  {priceValue === 800 && (
                    <span className="bg-[#6972B5] text-white rounded-full px-3 py-1 text-[14px] font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <p className="pt-[20px]">Includes:</p>
                <div className="flex gap-[20px] items-center">
                  <img className="w-[20px] h-[20px]" src="./check.png" alt="" />
                  <p className="text-[14px] pt-[10px]">{transportationType}</p>
                </div>
                <div className="flex gap-[20px] items-center">
                  <img className="w-[20px] h-[20px]" src="./check.png" alt="" />
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
              </div>

              {/* Button at the bottom of the card */}
              <button className="mt-auto bg-[#A4D1E2] w-[90%] rounded-[30px] h-[40px] text-[16px] font-semibold">
                Select package
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-[30px] absolute bottom-5 left-10">
        <button className="flex items-center bg-white w-[167px] justify-center gap-[15px] rounded-[30px] font-extrabold text-[#6972B5]">
          <img className="w-[20px]" src="./FacebookIcon.png" alt="Facebook" />
          Facebook
        </button>
        <button className="flex items-center bg-white w-[167px] h-[44px] justify-center gap-[13px] rounded-[30px] text-[18px] font-extrabold text-[#6972B5]">
          <img className="w-[20px]" src="./InstagramIcon.png" alt="Instagram" />
          Instagram
        </button>
      </div>
    </div>
  );
};
