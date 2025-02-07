import { Location } from "./Location";
import { PriceFooter } from "./PriceFooter";
import { Roadmap } from "./Roadmap";
import { HeroPage } from "./HeroPage";

export const MainPage = () => {
  return (
    <div className="min-w-[800px] w-full">
      <HeroPage />
      <Location />
      <Roadmap />
      <PriceFooter />
    </div>
  );
};
