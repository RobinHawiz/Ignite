import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  console.log(gameScreenshotURL(id));
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
