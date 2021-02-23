// Action creator
export const selectSong = (song) => {
  // Return an action
  // type 屬性是必要的，payload 則不一定
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
