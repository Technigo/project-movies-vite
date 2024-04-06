import { useState, useEffect, useRef } from "react";

const LoadImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      className={className}
      ref={imageRef}
      src={isVisible ? src : ""}
      alt={alt}
    />
  );
};

export default LoadImage;
