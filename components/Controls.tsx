import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";
import { CurrentSlideData, Data } from "@/pages";

type Props = {
  currentSlideData: CurrentSlideData;
  sliderData: Data[];
  data: Data[];
  transitionData: Data;
  handleData: React.Dispatch<React.SetStateAction<Data[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<CurrentSlideData>
  >;
  initData: Data;
};

function Controls({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: Props) {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.img === data[data.length - 1].img
      ),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-3 py-3 md:px-5 md:py-5">
      <div className="flex justify-center w-full md:hidden mb-5 md:mb-2 mt-20 md:mt-2"> {/* Centered on mobile */}
        <SliderButton handleClick={handlePrev}>
          <IoIosArrowBack className="text-xl" />
        </SliderButton>
        <Progress curIndex={currentSlideData.index} length={sliderData.length} />
        <SliderButton handleClick={handleNext}>
          <IoIosArrowForward className="text-xl" />
        </SliderButton>
      </div>
      <div className="hidden md:flex items-center">
        <SliderButton handleClick={handlePrev}>
          <IoIosArrowBack className="text-xl" />
        </SliderButton>
        <Progress curIndex={currentSlideData.index} length={sliderData.length} />
        <SliderButton handleClick={handleNext}>
          <IoIosArrowForward className="text-xl" />
        </SliderButton>
      </div>
    </div>
  );
}

export default Controls;

const SliderButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300 ease-in-out hover:bg-white hover:text-black mx-2"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
