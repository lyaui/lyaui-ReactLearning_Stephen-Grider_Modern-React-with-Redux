import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  renderList() {
    return this.props.posts.map((item) => (
      <div className='item' key={item.id}>
        <i className='large middle aligned icon user'></i>
        <div className='content'>
          <div className='description'>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
          <UserHeader userId={item.userId}></UserHeader>
        </div>
      </div>
    ));
  }

  render() {
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
