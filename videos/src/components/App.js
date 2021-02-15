import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.onTermSubmit('DUSTCELL');
  }
  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', { params: { q: term } });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className='ui container' style={{ padding: '10px' }}>
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail selectedVideo={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
