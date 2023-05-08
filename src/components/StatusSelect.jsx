import React from "react";
import chroma from "chroma-js";

import { colourOptions } from "../data.tsx";
import Select, { StylesConfig } from "react-select";

//TODO: 矢印の部分は白にしたい
const colourStyles = {
  control: (styles, { selectProps: { value } }) => ({
    ...styles,
    backgroundColor: value ? value.color : "white",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles, { selectProps: { value } }) => ({
    ...styles,
  }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles }),
};

const StatusSelect = ({ states, handleChangeStatus, index }) => {
  return (
    <Select
      //こっちにするとSelectみたいな表示になる
      // defaultValue={colourOptions[states.states]}
      defaultValue={colourOptions[states]}
      options={colourOptions}
      styles={colourStyles}
      onChange={(e) => handleChangeStatus(e, index)}
      // onChange={() => console.log("変わったよ")}
    />
  );
};

export default StatusSelect;
