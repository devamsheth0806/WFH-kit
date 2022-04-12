import axios from 'axios';

const KEY = ""; //Mention you API key here 
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 10,
  },
  headers: {}
});