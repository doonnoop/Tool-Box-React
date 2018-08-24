import { combineReducers } from 'redux';

import VideoReducer from './videos.js';
import ActiveVideoReducer from './activate_video';

const rootReducer = combineReducers({
  VideoReducer,
  ActiveVideoReducer
});

export default rootReducer;