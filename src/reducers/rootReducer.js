import { combineReducers } from 'redux';

import VideoReducer from './videos.js';
import ActiveVideoReducer from './activate_video';
import WeatherReducer from './weather';

const rootReducer = combineReducers({
  VideoReducer,
  ActiveVideoReducer,
  WeatherReducer
});

export default rootReducer;