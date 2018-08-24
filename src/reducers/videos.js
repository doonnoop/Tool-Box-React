import { FETCH_VIDEOS } from "../actions/videos";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      // console.log(action.videos.items);
      return action.videos.items;
      // action.payload.then( (res) => {
      //   console.log(res.data.items);
      // } );
    default:
      return state;
  }
}