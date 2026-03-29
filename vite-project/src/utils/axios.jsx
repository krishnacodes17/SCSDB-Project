import axios from 'axios';

const API_KEY = '7120457f';

const movieAPI = axios.create({
  baseURL: 'https://www.omdbapi.com',
  params: {
    apikey: API_KEY
  }
});

export default movieAPI