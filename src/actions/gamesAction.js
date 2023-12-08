import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";
import { searchGameURL } from "../api";

//Action
export const loadGames = () => async (dispatch) => {
  const popularGameResponse = await axios.get(popularGamesURL());
  const upcomingGameResponse = await axios.get(upcomingGamesURL());
  const newGameResponse = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGameResponse.data.results,
      upcoming: upcomingGameResponse.data.results,
      newGames: newGameResponse.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  console.log(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
