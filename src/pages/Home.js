//Redux
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//useEffect
import { useEffect } from "react";

const Home = () => {
  //Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
