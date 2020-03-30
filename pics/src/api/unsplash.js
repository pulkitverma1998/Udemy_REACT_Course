import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID wa6c34FB9ovzduALmZWl1mrszH35IQLcSfTQpzDjNwY'
  }
});
