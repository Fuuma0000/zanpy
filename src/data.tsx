export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "0", label: "怪我あり", color: "#FFCCCC" },
  { value: "1", label: "脱走中", color: "#FEFFB6" },
  { value: "2", label: "迷子保護", color: "#B9DCEF" },
  { value: "3", label: "無事", color: "#C0FBBF" },
  { value: "4", label: "不明", color: "#D9D9D9" },
];
