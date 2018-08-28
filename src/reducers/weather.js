import { FETCH_WEATHER } from "../actions/weather";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      var currentState = state;
      const existCity = currentState.find((data) => {
        return data.city.name === action.videos.city.name
      });

      if(existCity === undefined) {
        return [...currentState, action.videos];
      }
      else {
        currentState.splice(currentState.indexOf(existCity, 1));
        currentState.unshift(existCity);
        return currentState;
      }
    default:
      return state;
  }
}