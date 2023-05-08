import React from "react";
import chroma from "chroma-js";

import { colourOptions } from "../data.tsx";
import Select from "react-select";

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 15,
    width: 15,
  },
});

const colourStyles = {
  control: (styles) => {
    const updatedStyles = {
      ...styles,
      backgroundColor: "white",
    };
    return updatedStyles;
  },
  option: (styles, { data, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      ...dot(data.color),
      backgroundColor: "white", // 選択時の背景色を変更
      color: "black",
      cursor: "default",
    };
  },
  singleValue: (styles, { data }) => {
    const updatedStyles = {
      ...styles,
      ...dot(data.color),
    };
    return updatedStyles;
  },
};

const StatusSelect = ({ states, handleChangeStatus, index }) => {
  return (
    <Select
      options={colourOptions}
      styles={colourStyles}
      onChange={(e) => handleChangeStatus(e, index)}
      value={colourOptions[states]}
    />
  );
};

export default StatusSelect;
