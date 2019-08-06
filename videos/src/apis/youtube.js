import axios from 'axios';

const KEY ='AIzaSyDfDxsZFisgzEeR8bkJ62t8fXYrJ1Nnmjo'

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params :{
        part: 'snippet',
        maxResults: 5,
        key : KEY
    }
});

