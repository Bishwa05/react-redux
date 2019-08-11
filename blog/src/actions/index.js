import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers =() => async (dispatch, getState) =>{
    await dispatch(fetchPosts());

//    const userIds= _.uniq(_.map(getState().posts,'userId'));
//    userIds.forEach(id => dispatch(fetchUser(id)));

   _.chain(getState().posts)
   .map('userId')
   .uniq()
   .forEach(id => dispatch(fetchUser(id)))
   .value()
}

export const fetchPosts =  () =>  async dispatch => {

        const response =  await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data

        })
};

//Drawback is nultiple calls for each time user fetch
export const fetchUser =  id =>  async dispatch => {

    const response =  await jsonPlaceholder.get(`/users/${id}`);
    dispatch( {
        type: 'FETCH_USER',
        payload: response.data

    })
};

// Memoized version 
//The side effect is it does not refetch if any changes happend to 
//user in between
// export const fetchUser =  id =>  dispatch => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response =  await jsonPlaceholder.get(`/users/${id}`);
//      dispatch( {
//          type: 'FETCH_USER',
//          payload: response.data

//      })
// });

