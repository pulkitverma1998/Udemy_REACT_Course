import axios from 'axios';

const KEY = 'AIzaSyCA4YIPUUPnj0_AqLmjkiLZz1WxGJriE2M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
