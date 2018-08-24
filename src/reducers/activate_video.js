import { FETCH_ONE_VIDEO, SELECT_VIDEO } from "../actions/videos";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case  FETCH_ONE_VIDEO:
      return action.videos.items[0];
    case SELECT_VIDEO:
      return action.video;
    default:
      return state;
  }
}