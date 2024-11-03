import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef(null); //assigning refrence to ?

  const motionValue = useMotionValue(0); //Animated number initial value
  const springValue = useSpring(motionValue, { duration: 3000 }); //setting duratioon for animated number
  const isInView = useInView(ref); //Giving reference of the element
  const [displayNumber, setDisplayNumber] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      let roundedNumber = Math.round(latest);
      if (roundedNumber && displayNumber <= value) {
        const clampedValue = Math.min(Math.round(latest), value);
        setDisplayNumber(clampedValue);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>{displayNumber}</span>;
};

export default AnimatedNumbers;
