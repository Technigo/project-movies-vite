import { useEffect, useState } from "react";

const useScrollClasses = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        document.body.classList.add("is-scrolling");

        if (currentScrollY > scrollY) {
          document.body.classList.add("is-scrolling-down");
          document.body.classList.remove("is-scrolling-up");
          setScrollDirection("down");
        } else if (currentScrollY < scrollY) {
          document.body.classList.add("is-scrolling-up");
          document.body.classList.remove("is-scrolling-down");
          setScrollDirection("up");
        }
      } else {
        // Remove classes if less than or equal to 80px
        document.body.classList.remove(
          "is-scrolling",
          "is-scrolling-up",
          "is-scrolling-down",
        );
        setScrollDirection(null);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return scrollDirection;
};

const ScrollClasses = () => {
  useScrollClasses();
};

export default ScrollClasses;
