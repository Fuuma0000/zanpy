import { atom } from "recoil";

//keyを設定するための関数
// function createData(
//   ani_id,
//   area_id,
//   ani_type,
//   ani_name,
//   status_id,
//   memos,
//   memoTime
// ) {
//   return { ani_id, area_id, ani_type, ani_name, status_id, memos, memoTime };
// }
function createData(area, type, name, states, memos, memoTime) {
  return { area, type, name, states, memos, memoTime };
}

// 担当エリアの状態を管理する
export const myAreaResultState = atom({
  key: "myAreaResultState",
  default: [
    createData(
      "ふれあい",
      "うさぎ",
      "キャロット",
      null,
      "どっか行った",
      "10/10 10:00"
    ),
    createData(
      "ふれあい",
      "うさぎ",
      "ぴょんすけ",
      null,
      "どりゃああああ",
      "10/10 10:06"
    ),
    createData(
      "ふれあい",
      "うさぎ",
      "ミッフィー",
      null,
      "ぽにょだよー",
      "10/10 11:10"
    ),
    createData(
      "ふれあい",
      "うさぎ",
      "ピーター",
      null,
      "ちくわの中身を覗いてしまった",
      "10/10 12:00"
    ),
    createData(
      "ふれあい",
      "レッサーパンダ",
      "ラスカル",
      null,
      "",
      "10/11 10:00"
    ),
    createData(
      "ふれあい",
      "レッサーパンダ",
      "メイ",
      null,
      "お腹すいた",
      "10/11 14:00"
    ),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", "10/11 18:00"),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", "10/11 20:00"),
    createData("ふれあい", "リスざる", "ジュリアン", null, "", "10/11 23:00"),
    createData(
      "ふれあい",
      "リスざるwww",
      "ジュリアン",
      null,
      "",
      "10/14 10:00"
    ),
  ],
});
