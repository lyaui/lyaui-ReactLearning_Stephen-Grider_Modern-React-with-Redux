import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
  { label: 'The Color Green', value: 'green' },
  { label: 'The Color Red', value: 'Red' },
  { label: 'A Shade of Blue', value: 'Blue' },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items}></Accordion> */}
      {/* <Search></Search> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toddle Dropdown</button>
      {showDropdown ? (
        <Dropdown selected={selected} onSelectedChange={setSelected} options={options}></Dropdown>
      ) : null}
    </div>
  );
};

export default App;
