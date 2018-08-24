var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const FETCH_ONE_VIDEO = 'FETCH_ONE_VIDEO';
export const SELECT_VIDEO = 'SELECT_VIDEO';

const API_KEY = 'AIzaSyDT6DtcMBU8NBMPJZgcOghurUICc2yQ6Zc';

export function fetchVideos(keyword) {
  // const params = {
  //   part: 'snippet',
  //   key: API_KEY,
  //   q: keyword,
  //   type: 'video'
  // };
  //
  // const request = axios.get(ROOT_URL, { params: params });
  // return {
  //   type: FETCH_VIDEOS,
  //   payload: request
  // }

  return (dispatch) => {
    fetch(`${ ROOT_URL}?q=${keyword}&part=snippet&key=${API_KEY}`)
      .then((resp) => resp.json())
      .then(resp => {
        dispatch({
          type: FETCH_VIDEOS,
          videos: resp
        })
      })
  };

}

export function fetchOneVideo(keyword) {
  // const params = {
  //   part: 'snippet',
  //   key: API_KEY,
  //   q: term,
  //   type: 'video',
  //   maxResults: 1
  // };
  //
  // return {
  //   type: FETCH_ONE_VIDEO,
  //   payload: axios.get(ROOT_URL, { params })
  // }

  return (dispatch) => {
    fetch(`${ ROOT_URL}?q=${keyword}&part=snippet&key=${API_KEY}`)
      .then((resp) => resp.json())
      .then(resp => {
        dispatch({
          type: FETCH_ONE_VIDEO,
          videos: resp
        })
      })
  };
}

export function selectVideo(video) {
  return {
    type: SELECT_VIDEO,
    video: video
  }
}