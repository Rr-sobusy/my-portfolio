"use client";

import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

type Props = {
  typedStrings: string[];
};

const TypingAnimation = (props: Props) => {
  const { typedStrings = [""] } = props;
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      const options: Typed.TypedOptions = {
        strings: typedStrings,
        typeSpeed: 80,
        backSpeed: 70,
        smartBackSpace: true,
        loop: true,
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);
  return <span className="text-white" ref={typedRef}></span>;
};

export default TypingAnimation;
