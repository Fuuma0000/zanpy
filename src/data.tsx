export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "ocean", label: "怪我あり", color: "#FFCCCC" },
  { value: "blue", label: "脱走中", color: "#FEFFB6" },
  { value: "purple", label: "迷子保護", color: "#B9DCEF" },
  { value: "red", label: "無事", color: "#C0FBBF" },
  { value: "orange", label: "不明", color: "#D9D9D9" },
];
