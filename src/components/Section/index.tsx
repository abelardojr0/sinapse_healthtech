import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const SectionComponent: React.FC<SectionProps> = ({
  children,
  id,
  className = "",
  style,
}) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={
        isVisible
          ? { opacity: 1, x: 0, transition: { duration: 0.6 } }
          : { opacity: 0, x: 100, transition: { duration: 0.6 } }
      }
      className={`py-20 ${className}`}
      style={style}
    >
      {children}
    </motion.section>
  );
};
