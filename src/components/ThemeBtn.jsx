import React from "react";
import { myFirstContext } from "../context";
import { useContext } from "react"; // import useContext hook

export default function ThemeBtn() {
  const { isDark, setIsDark } = useContext(myFirstContext);
  return (
    <div className="btn-dark">
      <div
        className="backbtn"
        onClick={() => {
          setIsDark(!isDark);
        }}
        style={{
          justifyContent: isDark === false ? "flex-start" : "flex-end",
        }}
      >
        <div className="cerclebtn">
          <button></button>
        </div>
      </div>
    </div>
  );
}
