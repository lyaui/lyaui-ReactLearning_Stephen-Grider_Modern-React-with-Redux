// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          avatar={faker.image.image()}
          content={
            "Kuzuha's cover is the best one yet. He doesn't sound over-the-top and uses a tone that perfectly suits the song. It's no wonder he has so many views. Amazing job, Kuzuha! Just... WOW ♡"
          }
        ></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 2:00AM'
          avatar={faker.image.image()}
          content={
            "I'm here to listen to a good song, increase the debt and help Soraru get more money in his piggy bank 👍"
          }
        ></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Joe'
          timeAgo='Yesterday at 5:00PM'
          avatar={faker.image.image()}
          content={
            'I heard about Nijisanji and here I am my first Nijisanji video. Now lezgo deeper'
          }
        ></CommentDetail>
      </ApprovalCard>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
