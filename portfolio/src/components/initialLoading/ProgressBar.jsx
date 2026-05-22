import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  //barra de progreso que se llena en 5 segundos
  useEffect(() => {
    const duration = 5000; // 5 segundos
    const intervalTime = 50;

    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative -mt-4 lg:-mt-6 w-full">
      <section className="w-11/12 flex justify-between mb-1">
        <span className="text-ink font-cta text-xs lg:text-sm">Portfolio</span>
        <span className="text-ink font-cta text-xs lg:text-sm">
          {Math.round(progress)}%
        </span>
      </section>
      <div className="h-2 md:h-2.5 lg:h-3 rounded-full overflow-hidden bg-cream">
        <div
          className="h-full rounded-full bg-orange transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
