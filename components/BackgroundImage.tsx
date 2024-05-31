import React from "react";
import { motion } from "framer-motion";
import { Data, CurrentSlideData } from "@/pages";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // filter: "brightness(50%)", // Adjust brightness here
          }}
          src={transitionData.img}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // filter: "brightness(50%)", // Adjust brightness here
        }}
      />
    </>
  );
}

export default BackgroundImage;
