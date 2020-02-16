import axios from 'axios';

const KEY = 'AIzaSyBjLe905QEPSPvfc3_3jQdMWxw1AtqeIx0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY
  }
});