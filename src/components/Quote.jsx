import React from "react";
import { myFirstContext } from "../context";
import { useContext } from "react"; // import useContext hook

export default function Quote() {
  const { isDark, quote } = useContext(myFirstContext);
  return (
    <div className="containerquotes">
      <div
        className="quotesform"
        style={{
          backgroundColor: isDark === false ? "" : "#111827",
          color: isDark === false ? "" : "white",
        }}
      >
        <div className="quotes">
          <h3>{quote.content}</h3>
          <p>{quote.author}</p>
        </div>
      </div>
    </div>
  );
}
