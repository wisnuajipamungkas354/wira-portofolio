import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Definisikan props interface untuk Counter component
interface CounterProps {
  from: number;
  to: number;
  duration: number;
  suffix?: string;
}

// --- Komponen Counter untuk Animasi Angka ---
const Counter: React.FC<CounterProps> = ({
  from,
  to,
  duration,
  suffix = "",
}) => {
  const [currentValue, setCurrentValue] = useState<number>(from);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      const frameRate = 60; // frames per second
      const increment = (end - start) / (duration * frameRate);
      let currentFrame = 0;
      const totalFrames = duration * frameRate;

      const interval = setInterval(() => {
        start += increment;
        currentFrame++;
        if (currentFrame >= totalFrames) {
          start = end;
          clearInterval(interval);
        }
        setCurrentValue(Math.floor(start));
      }, 1000 / frameRate); // Update setiap frame

      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });

      return () => clearInterval(interval);
    }
  }, [controls, inView, from, to, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="text-primary-300 text-display-lg mb-xs block leading-none font-bold"
    >
      {currentValue}
      {suffix}
    </motion.span>
  );
};

// --- Komponen Utama AchievementsSection ---
const AchievementsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="py-8xl text-base-white font-sans"
    >
      <div className="custom-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center" // Menggunakan mb-10 seperti kode terakhir Anda
        >
          <h2 className="text-display-xl text-base-white mb-md font-bold">
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </motion.div>

        {/* Bagian Grid Statistik */}
        <motion.div
          // === PERUBAHAN DI SINI ===
          // Default: grid-cols-2 (untuk mobile)
          // lg:grid-cols-4: Untuk desktop
          className="gap-4xl grid grid-cols-2 justify-items-center lg:grid-cols-4"
          variants={sectionVariants}
        >
          {/* Item Statistik 1: Projects Delivered */}
          <motion.div
            className="p-md flex h-[250px] w-[250px] flex-col items-center justify-center rounded-full bg-gray-900 text-center max-sm:h-[200px] max-sm:w-[200px]"
            variants={itemVariants}
          >
            <Counter from={0} to={50} duration={7} suffix="+" />
            <p className="text-md max-w-[80%] text-gray-400">
              Projects Delivered
            </p>
          </motion.div>

          {/* Item Statistik 2: Years of Experience */}
          <motion.div
            className="p-md flex h-[250px] w-[250px] flex-col items-center justify-center rounded-full bg-gray-900 text-center max-sm:h-[200px] max-sm:w-[200px]"
            variants={itemVariants}
          >
            <Counter from={0} to={5} duration={7} suffix="+" />
            <p className="text-md max-w-[80%] text-gray-400">
              Years of Experience
            </p>
          </motion.div>

          {/* Item Statistik 3: Industry Awards Won */}
          <motion.div
            className="p-md flex h-[250px] w-[250px] flex-col items-center justify-center rounded-full bg-gray-900 text-center max-sm:h-[200px] max-sm:w-[200px]"
            variants={itemVariants}
          >
            <Counter from={0} to={10} duration={7} suffix="+" />
            <p className="text-md max-w-[80%] text-gray-400">
              Industry Awards Won
            </p>
          </motion.div>

          {/* Item Statistik 4: Client Satisfaction Rate */}
          <motion.div
            className="p-md flex h-[250px] w-[250px] flex-col items-center justify-center rounded-full bg-gray-900 text-center max-sm:h-[200px] max-sm:w-[200px]"
            variants={itemVariants}
          >
            <Counter from={0} to={100} duration={7} suffix="%" />
            <p className="text-md max-w-[80%] text-gray-400">
              Client Satisfaction Rate
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AchievementsSection;
