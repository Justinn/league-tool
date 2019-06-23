const axios = require("axios");

const initialState = {
  selectedSummoner: {},
  selectedSummonerLeaguePosition: [],
  loadingSummoner: false,
  activeGame: {}
};

const GOT_SUMMONER_BY_NAME = "GOT_SUMMONER_BY_NAME";
const GOT_LEAGUE_POSITION = "GOT_LEAGUE_POSITION";
const LOADING_SUMMONER = "LOADING SUMMONER";
const GOT_ACTIVE_GAME = "GOT_ACTIVE_GAME";

const gotSummonerByName = summoner => {
  return { type: GOT_SUMMONER_BY_NAME, summoner };
};

const gotLeaguePosition = leaguePosition => {
  return { type: GOT_LEAGUE_POSITION, leaguePosition };
};

const loadingSummoner = () => {
  return { type: LOADING_SUMMONER };
};

const gotActiveGame = activeGame => {
  return { type: GOT_ACTIVE_GAME, activeGame };
};

export const getSummonerByName = name => {
  return async dispatch => {
    dispatch(loadingSummoner());
    const { data } = await axios.get(`/api/summoner/${name}`);
    dispatch(gotSummonerByName(data));
  };
};

export const getLeaguePosition = summonerId => {
  return async dispatch => {
    dispatch(loadingSummoner());
    const { data } = await axios.get(`/api/league/position/${summonerId}`);
    dispatch(gotLeaguePosition(data));
  };
};

export const getActiveGame = summonerId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/active-game/summoner/${summonerId}`);
    dispatch(gotActiveGame(data));
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SUMMONER_BY_NAME:
      return {
        ...state,
        selectedSummoner: action.summoner,
        loadingSummoner: false
      };
    case GOT_LEAGUE_POSITION:
      return {
        ...state,
        selectedSummonerLeaguePosition: action.leaguePosition,
        loadingSummoner: false
      };
    case LOADING_SUMMONER:
      return { ...state, loadingSummoner: true };
    case GOT_ACTIVE_GAME:
      return { ...state, activeGame: action.activeGame };
    default:
      return state;
  }
};

export default rootReducer;
