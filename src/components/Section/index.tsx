// Utility components as React components using Tailwind
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-5 ${className}`}>{children}</div>
);

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
      initial={{ opacity: 0, y: 50 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
          : { opacity: 0, y: 50, transition: { duration: 0.6 } }
      }
      className={`py-20 ${className}`}
      style={style}
    >
      {children}
    </motion.section>
  );
};

export const SectionTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h2
    className={`text-3xl md:text-4xl font-medium text-center mb-16 text-slate-800 ${className}`}
  >
    {children}
  </h2>
);

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  style,
}) => {
  const baseClasses =
    "px-6 py-2.5 font-medium rounded-md transition-all duration-200";

  const variantClasses = {
    primary: "bg-slate-800 text-white hover:bg-slate-700",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
