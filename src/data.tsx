export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "0", label: "無事", color: "#5DFF59" },
  { value: "1", label: "怪我あり", color: "#FF6161" },
  { value: "2", label: "脱走中", color: "#FBFF49" },
  { value: "3", label: "不明", color: "#D9D9D9" },
];
