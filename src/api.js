//Base URL
const base_url = `https://api.rawg.io/api/`;

//Getting the current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the current day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Getting the current year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//GET popular games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentYear}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentYear},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentYear}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//GET game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${process.env.REACT_APP_RAWG_API}`;
//GET Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&key=${process.env.REACT_APP_RAWG_API}&page_size=9`;
