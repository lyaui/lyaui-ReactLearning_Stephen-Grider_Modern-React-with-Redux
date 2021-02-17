import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta cumque omnis nemo velit natus quae assumenda suscipit amet eaque nihil!',
  },
  {
    title: 'Why use React?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis ex sed aliquam impedit possimus sequi ut debitis pariatur voluptates.',
  },
  {
    title: 'How do you use React?',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis, ullam quae adipisci harum sapiente.',
  },
];

const App = () => {
  return (
    <div>
      <Search></Search>
    </div>
  );
};

export default App;
