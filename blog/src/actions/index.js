import jsonPlaceholder from '../apis/jsonPlaceholder';

// redux-thunk 第一個參數是 dispatch，第二個參數是 getstate
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // 使用 dispatch 確保
  await dispatch(fetchPosts());
  // 利用 getState 取得 store 的資料
  const counter = {};
  getState().posts.forEach((post) => {
    counter[post.userId] = counter[post.userId] ? counter[post.userId] + 1 : 1;
  });
  const userIds = Object.keys(counter);
  // 此處不用再設定 await 因為我們不在意 fetchUser 執行的順序
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: res.data });
};
