import "./App.css";
import IconGen from "./components/IconGen";
import Quote from "./components/Quote";
import ThemeBtn from "./components/ThemeBtn";
import { useState, useEffect } from "react";
import { myFirstContext } from "./context";
import { useContext } from "react"; // import useContext hook

function App() {
  const { isDark, setIsDark, quote, fetchData } = useContext(myFirstContext);

  // l fonction dir haja ha tesra ki ndir refresh l page
  useEffect(function dirHaja() {
    console.log("fetching data ...");
    fetchData();
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: isDark === false ? "" : "#1F2937",
      }}
    >
      <div className="body">
        <ThemeBtn />
        <Quote />
        <IconGen />
      </div>
    </div>
  );
}

export default App;
