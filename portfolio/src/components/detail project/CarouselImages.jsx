// import { useEffect, useState } from "react";

// const CarouselImages = ({ images }) => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000); // velocidad

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const visible = [
//     images[index % images.length],
//     images[(index + 1) % images.length],
//     images[(index + 2) % images.length],
//   ];

//   //   return (
//   //     <div className="w-full flex justify-center overflow-hidden py-30">
//   //       <div className="flex items-center gap-25 transition-all duration-500">
//   //         {visible.map((img, i) => {
//   //           const isCenter = i === 1;

//   //           return (
//   //             <div
//   //               key={img.name}
//   //               className={`
//   //                 flex flex-col items-center transition-all duration-500
//   //               ${
//   //                 isCenter
//   //                   ? "scale-250 text-ink z-20"
//   //                   : "scale-70 text-stone opacity-50"
//   //               }
//   // }
//   //               `}
//   //             >
//   //               <img
//   //                 src={img.image}
//   //                 alt={img.name}
//   //                 className="w-64 md:w-72 lg:w-120 transition-all duration-700 ease-out"
//   //               />

//   //               <span className="mt-2 font-accent-body text-sm md:text-base">
//   //                 {img.name.toLowerCase()}
//   //               </span>
//   //             </div>
//   //           );
//   //         })}
//   //       </div>
//   //     </div>
//   //   );
//   return (
//     <div className="w-full flex justify-center overflow-hidden pt-10 lg:pt-30">
//       <div className="flex items-center gap-25">
//         {visible.map((img, i) => {
//           const isCenter = i === 1;

//           return (
//             <div
//               key={img.name}
//               className={`
//               flex flex-col items-center transition-colors duration-500
//               ${isCenter ? "text-ink z-20" : "text-stone opacity-50"}
//             `}
//             >
//               {/* IMAGEN */}
//               <img
//                 src={img.image}
//                 alt={img.name}
//                 className={`
//                 transition-transform duration-700 ease-out
//                 w-64 md:w-72 lg:w-140
//                 ${isCenter ? "scale-270" : "scale-70"}
//               `}
//               />

//               {/* TEXTO → SOLO CENTRO */}
//               {isCenter && (
//                 <span className="mt-20 font-accent-body text-stone text-sm md:text-base transition-opacity duration-500 whitespace-nowrap">
//                   {img.name.toLowerCase()}
//                 </span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CarouselImages;

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
            w-[90%]
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
