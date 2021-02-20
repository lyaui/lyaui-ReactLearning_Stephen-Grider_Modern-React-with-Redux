import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

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

  return (
    <div>
      <Header></Header>
      <Route path='/'>
        <Accordion items={items}></Accordion>
      </Route>

      <Route path='/list'>
        <Search></Search>
      </Route>

      <Route path='/dropdown'>
        <Dropdown selected={selected} onSelectedChange={setSelected} options={options}></Dropdown>
      </Route>

      <Route path='/translate'>
        <Translate></Translate>
      </Route>
    </div>
  );
};

export default App;
