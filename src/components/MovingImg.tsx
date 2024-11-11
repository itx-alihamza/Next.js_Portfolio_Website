import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

type Props = {
  title?: string;
  img: any;
  link?: string;
};
const MovingImg = ({ title, img, link }: Props) => {
  const FramerImage = motion(Image);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement>(null);

  function handleMouse(event: any) {
    imgRef.current!.style.display = "inline-block";
    x.set(event.page);
    y.set(-10);
  }
  function handleMouseLeave(event: any) {
    imgRef.current!.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href="http://www.something.com"
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgRef}
        alt="Artile Preview Image"
        src={img}
        className="w-96 h-auto absolute rounded-lg"
      />
    </Link>
  );
};

export default MovingImg;
