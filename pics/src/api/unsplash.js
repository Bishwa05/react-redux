import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 616f9ac2fd33e6b3071dddf60e897689c8a6af1c72c10fe3146db803b84fbf02'
    }
});