import axios from 'axios';

const instance = axios.create({
    // The API (cloud function) URL
    baseURL: 
    // 'http://localhost:5001/challenge-de188/us-central1/api'
    'https://us-central1-challenge-de188.cloudfunctions.net/api'
});

export default instance;
