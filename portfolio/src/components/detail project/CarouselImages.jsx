import { useEffect, useState } from "react";

const CarouselImages = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setVisible(true); // fade in
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const image = images[index];

  return (
    <div className="w-full flex justify-center overflow-hidden py-4 lg:py-8">
      <div
        className={`
    flex flex-col items-center
    transition-all duration-900 ease-out
    ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
  `}
      >
        <img
          src={image.image}
          alt={image.name}
          className="
            w-[95%]
            max-w-3xl
            transition-transform duration-700 ease-out
          "
        />

        <span className=" font-accent-body text-stone text-xs md:text-sm lg:text-base whitespace-nowrap">
          {image.name.toLowerCase()}
        </span>
      </div>
    </div>
  );
};

export default CarouselImages;
