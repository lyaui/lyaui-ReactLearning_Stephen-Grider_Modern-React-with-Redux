import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => (
      <div className='item' key={song.title}>
        <div className='right floated content'>
          <button onClick={() => this.props.selectSong(song)} className='ui button primary'>
            Select
          </button>
        </div>
        <div className='content'>{song.title}s</div>
      </div>
    ));
  }
  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs }; // 這是一個 props 物件
};
export default connect(mapStateToProps, { selectSong })(SongList);
