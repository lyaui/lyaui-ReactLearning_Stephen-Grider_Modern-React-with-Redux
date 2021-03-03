// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  // switch 的用法較常見
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
