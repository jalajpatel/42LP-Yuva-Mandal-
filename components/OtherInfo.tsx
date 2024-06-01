import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

function OtherInfo({ data }: any) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{
       // Optional: Add border-radius for rounded corners
      }}
    >
      {/* <AnimatedText
        style={{
          letterSpacing: "normal",
          overflow: "hidden",
          color: "#D5D5D6",
        }}
        data={data?.location}
      /> */}
      {/* <AnimatedText
        style={{
          marginTop: "0.25rem",
          marginBottom: "0.25rem",
          fontSize: "1.25rem", // Adjusted fontSize to a relative unit
          fontWeight: "bold",
          lineHeight: "1",
        }}
        data={data?.title}
      /> */}
      {/* <AnimatedText
        style={{
          fontSize: "0.875rem", // Adjusted fontSize to a relative unit
          color: "#D5D5D6",
        }}
        data={data?.description}
      /> */}
    </motion.div>
  );
}

export default OtherInfo;

const AnimatedText = ({ data, style }: any) => {
  return (
    <span style={{ overflow: "hidden", display: "inline-block", ...style }}>
      {/* <motion.p variants={item} key={data}>
        {data}
      </motion.p> */}
    </span>
  );
};
