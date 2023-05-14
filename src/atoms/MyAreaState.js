import { atom } from "recoil";

// 担当エリアの状態を管理する
export const myAreaState = atom({
  key: "myAreaState",
  default: [],
});
