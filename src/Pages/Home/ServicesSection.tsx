import Container from "@/components/LayOuts/Container";
import BatteryReplacemnet from "@/components/ServiceTiles/BatteryReplacemnet";
import BottomToTop from "@/components/ServiceTiles/BottomToTop";
import LeftToRight from "@/components/ServiceTiles/LeftToRight";
import RightToLeft from "@/components/ServiceTiles/RightToLeft";
import YellowDiv from "@/components/ServiceTiles/YellowDiv";

const ServicesSection = () => {
  return (
    <div className="overflow-hidden">
      <Container>
        <div className="">
          <h1 className="text-center">this is services section </h1>
          <p className="max-w-[80ch] text-center  mx-auto mt-5 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae
            at sit, cum ipsa dolores obcaecati eveniet saepe minus error
            perspiciatis.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5 my-20  ">
          <BatteryReplacemnet></BatteryReplacemnet>
          <LeftToRight></LeftToRight>
          <RightToLeft></RightToLeft>
          <YellowDiv></YellowDiv>
          <div className="h-[400px] rounded-2xl bg-teal-500 col-span-12 md:col-span-6 lg:col-span-4"></div>
          <BottomToTop></BottomToTop>
          <div className="h-[400px] rounded-2xl bg-sky-500 col-span-12 md:col-span-12 lg:col-span-4"></div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
