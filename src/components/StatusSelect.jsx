import React from "react";
import chroma from "chroma-js";

import { colourOptions } from "../data.tsx";
import Select, { StylesConfig } from "react-select";

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: (styles, { selectProps: { value } }) => ({
    ...styles,
    backgroundColor: value ? value.color : "white",
  }),
  option: (styles, { data, isSelected, isFocused }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: isSelected ? data.color : color.alpha(0.3).css(),
      },
    };
  },
  input: (styles, { selectProps: { value } }) => ({
    ...styles,
    ...dot(value.color),
  }),
  placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

// const colourStyles = {
//   control: (styles, { selectProps: { value } }) => ({
//     ...styles,
//     backgroundColor: value ? value.color : "white",
//   }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: isDisabled
//         ? undefined
//         : isSelected
//         ? data.color
//         : isFocused
//         ? color.alpha(0.1).css()
//         : undefined,
//       color: isDisabled
//         ? "#ccc"
//         : isSelected || chroma.contrast(color, "white") > 2
//         ? "white"
//         : "black",
//       cursor: isDisabled ? "not-allowed" : "default",

//       ":active": {
//         ...styles[":active"],
//         backgroundColor: !isDisabled
//           ? isSelected
//             ? data.color
//             : color.alpha(0.3).css()
//           : undefined,
//       },
//     };
//   },
//   input: (styles, { selectProps: { value } }) => ({
//     ...styles,
//     ...dot(value.color),
//   }),
//   placeholder: (styles, { selectProps: { value } }) => ({
//     ...styles,
//     ...dot(value.color || "#ccc"),
//   }),
//   singleValue: (styles, { data }) => ({
//     ...styles,
//     ...dot(data.color),
//     color: chroma.contrast(data.color, "white") > 2 ? "white" : "black",
//   }),
// };

export default () => (
  <Select
    defaultValue={colourOptions[2]}
    options={colourOptions}
    styles={colourStyles}
  />
);
