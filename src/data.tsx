export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "ocean", label: "怪我あり", color: "#00B8D9" },
  { value: "blue", label: "脱走中", color: "#0052CC" },
  { value: "purple", label: "迷子保護", color: "#5243AA" },
  { value: "red", label: "無事", color: "#FF5630" },
  { value: "orange", label: "不明", color: "#FF8B00" },
];
