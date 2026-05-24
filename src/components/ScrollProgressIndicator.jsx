import "./ScrollProgressIndicator.css";
import { useEffect, useState } from "react";

const ScrollProgress = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition =
        window.scrollY;

      const scrollPercentage =
        (scrollPosition / totalHeight) * 100;

      setScroll(scrollPercentage);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${scroll}%` }}
    ></div>
  );
};

export default ScrollProgressIndicator;