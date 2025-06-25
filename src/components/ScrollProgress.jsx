import React, { useEffect, useState } from "react";
import styles from "./ScrollProgress.module.css";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${scroll}%` }} />
    </div>
  );
};

export default ScrollProgress;
