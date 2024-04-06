import { useEffect, useRef } from "react";

const LoadImage = ({ src, alt, className }) => {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          const src = img.getAttribute("data-src");

          img.setAttribute("src", src);

          // img.classList.add("fade");

          observer.disconnect();
        }
      });
    });

    observer.observe(imgRef.current);
  }, []);

  return (
    <>
      <img
        ref={imgRef}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjYGBg+A8AAQQBAHAgZQsAAAAASUVORK5CYII="
        data-src={src}
        alt={alt}
        loading="lazy"
        className={className}
      />
    </>
  );
  // const [isVisible, setIsVisible] = useState(false);
  // const imageRef = useRef();
  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   });
  //   observer.observe(imageRef.current);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  // return (
  //   <img
  //     className={className}
  //     ref={imageRef}
  //     src={isVisible ? src : ""}
  //     alt={alt}
  //   />
  // );
};

export default LoadImage;
