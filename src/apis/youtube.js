import axios from 'axios';
import API from '../apiKeys';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: API.REACT_APP_GOOGLE_API_KEY
  }
});