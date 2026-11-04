"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({ children }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return children;
};

export default AOSProvider;