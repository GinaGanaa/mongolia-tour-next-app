export const Location = () => {
  return (
    <div className="relative">
      <img className="w-full " src="./LocationImage.png" alt="Location" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-[20px] justify-between w-[90%]">
        <div className="relative min-w-[230px] w-[15vw] h-auto">
          <img
            className="w-full h-full object-contain rounded-[40px]"
            src="./terkhiinNuur.png"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className="text-xl font-bold">TERKHIIN TSAGAAN LAKE</p>
          </div>
        </div>
        <div className="relative min-w-[230px] w-[15vw] h-auto">
          <img
            className="w-full h-full object-contain rounded-[40px]"
            src="./monastery.png"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className="text-xl font-bold">AMARBAYASGALANT MONASTERY</p>
          </div>
        </div>
        <div className="relative min-w-[230px] w-[15vw] h-auto">
          <img
            className="w-full h-full object-contain rounded-[40px]"
            src="./khuwsgul.png"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className="text-xl font-bold">KHUVSGUL LAKE</p>
          </div>
        </div>
        <div className="relative min-w-[230px] w-[15vw] h-auto">
          <img
            className="w-full h-full object-contain rounded-[40px]"
            src="./horgiinTogoo.png"
            alt=""
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className="text-xl font-bold">KHORGIIN TOGOO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
