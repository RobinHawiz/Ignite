import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailResponse = await axios.get(gameDetailsURL(id));
  const screenShotResponse = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailResponse.data,
      screen: screenShotResponse.data,
    },
  });
};
