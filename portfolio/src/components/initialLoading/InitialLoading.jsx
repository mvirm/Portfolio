import ProgressBar from "./ProgressBar.jsx";
import initialLoading from "../../assets/background/initialLoading.svg";
// const InitialLoading = () => {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-parchment overflow-hidden">
//       <picture className="absolute inset-0">
//         <img
//           src={initialLoading}
//           alt="Initial Loading"
//           className="w-125 h-96 md:w-full md:h-full md:object-contain lg:object-cover"
//         />
//       </picture>
//       <div className="relative w-full max-w-3xl">
//         <ProgressBar />
//       </div>
//     </div>
//   );
// };
// export default InitialLoading;

const InitialLoading = () => {
  return (
    <div className="fixed inset-0 bg-parchment overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <picture className="absolute inset-0 flex items-center justify-center">
          <img
            src={initialLoading}
            alt="Initial Loading"
            className="w-125 h-96 md:w-full md:h-full md:object-contain lg:object-cover"
          />
        </picture>

        <div className="relative z-10 w-full max-w-3xl px-6">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default InitialLoading;
