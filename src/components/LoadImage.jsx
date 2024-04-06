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
};

export default LoadImage;
