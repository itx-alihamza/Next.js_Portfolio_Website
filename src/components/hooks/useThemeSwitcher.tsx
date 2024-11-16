import React, { useEffect, useLayoutEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)"; //css feature to detect if use have request dart or light theme
  const [mode, setMode] = useState("light");

  useLayoutEffect(() => {
    const mdeiaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");
    console.log("Theme Localstorage :", userPref);

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "light" : "dark";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mdeiaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    // handleChange();

    mdeiaQuery.addEventListener("change", handleChange);

    return () => mdeiaQuery.removeEventListener("change", handleChange);
  }, [mode]);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
    console.log("Theme State : ", mode);
    console.log("Theme LocalStorage : ");
  }, [mode]);
  return [mode, setMode];
};

export default useThemeSwitcher;
