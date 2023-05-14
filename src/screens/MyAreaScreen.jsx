import Header from "./Header";
import SearchBox from "../components/SearchBox";
import StatesTable from "../components/StatesTable";
import { useSetRecoilState } from "recoil";
import { myAreaOpenState } from "../atoms/MyAreaOpenState";

const MyAreaScreen = () => {
  const setMyAreaOpen = useSetRecoilState(myAreaOpenState);
  //初回レンダリング時にmyAreaOpenStateをtrueにする
  setMyAreaOpen(true);

  // /api/myareaにGETリクエストを送る

  return (
    <>
      <Header></Header>
      <SearchBox></SearchBox>
      <StatesTable></StatesTable>
    </>
  );
};

export default MyAreaScreen;
