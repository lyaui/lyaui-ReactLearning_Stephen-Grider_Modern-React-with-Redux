import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Chinese (Traditional)', value: 'zh-TW' },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('Hello');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter text</label>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label={'Select a language'}
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      ></Dropdown>
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language}></Convert>
    </div>
  );
};

export default Translate;
