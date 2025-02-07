export const HeroPage = () => {
  return (
    <div className="relative min-w-[800px] w-full">
      <img className="w-full h-auto" src="./HeroImage.png" alt="Hero" />
      <div className="absolute flex justify-center items-center w-full top-8">
        <div className="flex justify-between w-[85%] gap-[20px]">
          <div>
            <img
              className="w-[101px] h-[35px]"
              src="./tourLogo.png"
              alt="Logo"
            />
          </div>
          <div className="text-[18px] flex gap-[24px] text-white font-medium w-[392px] justify-between">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>
              <img src="./user.svg" alt="User Icon" />
            </button>
          </div>
          <div>
            <button className="bg-white w-[40px] h-[40px] rounded-full">
              En
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <p className="text-[30px]">PURE MAGIC</p>
        <p className=" font-extrabold text-[100px]">AWAITS!</p>
        <p className="text-[50px]">2024</p>
      </div>
    </div>
  );
};
