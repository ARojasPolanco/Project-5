import { useEffect, useState } from "react";

const DarkMode = () => {
  const [DarkMode, setDarkMode] = useState(null);

  const handleDarkMode = () => {
    setDarkMode(DarkMode === "dark" ? "" : "dark");
  };

  useEffect(() => {
    const isDarkInLocal = localStorage.getItem("dark");
    if (isDarkInLocal) {
      localStorage.removeItem("dark");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("dark", true);
      document.documentElement.classList.add("dark");
    }
  }, [DarkMode]);
  return (
    <section>
      <div
        onClick={handleDarkMode}
        className={`h-10 aspect-square absolute top-2 left-2 cursor-pointer z-[100] bg-black/50 rounded-full p-1 transition-transform ${
          DarkMode === "dark" ? "right-0" : "-translate-x-20"
        }`}
      >
        <img src="/images/moon.png" alt="" />
      </div>
      <div
        onClick={handleDarkMode}
        className={`h-10 aspect-square absolute top-2 left-2 cursor-pointer z-[100] bg-white/50 rounded-full p-1 transition-transform ${
          DarkMode === "dark" ? "-translate-x-20" : "right-0"
        }`}
      >
        <img src="/images/sun.png" alt="" />
      </div>
    </section>
  );
};
export default DarkMode;
