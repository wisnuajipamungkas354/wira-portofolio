import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

import { SolutionITCard } from "@/components/SolutionCard";

import { ITSolutionItem, itSolutionsData } from "@/constants/it-solutions-data";

export const ItSolutionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transtition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="py-7 text-shadow-base-white font-sans"
    >
      <div className="custom-container gap-3.5">
        <motion.div className="text-center" variants={titleVariants}>
          <h2 className="text-sm-semibold md:text-display-xl md:font-bold text-base-white">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="text-sm-medium md:text-lg-medium">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20"
          variants={sectionVariants}
        >
          {itSolutionsData.map((item: ITSolutionItem) => (
            <SolutionITCard
              key={item.id}
              iconSrc={item.iconSrc}
              description={item.description}
              title={item.title}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
