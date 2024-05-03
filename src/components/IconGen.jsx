import React from "react";
import Icon from "../img/shuffle.svg";
import { myFirstContext } from "../context";
import { useContext } from "react"; // import useContext hook

export default function IconGen() {
  const { fetchData } = useContext(myFirstContext);
  return (
    <div className="iconback">
      <button
        onClick={() => {
          fetchData();
        }}
      >
        <img src={Icon} alt="imgicon" />
      </button>
    </div>
  );
}
