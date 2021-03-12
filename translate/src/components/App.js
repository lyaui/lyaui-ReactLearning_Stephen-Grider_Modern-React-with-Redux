import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        {/* 包覆在 LanguageStore之下的都會被渲染（props.children），也都可以接收到其 context */}
        <LanguageStore>
          <LanguageSelector></LanguageSelector>
          {/* 包裹的順序不重要 */}
          <ColorContext.Provider value={'red'}>
            <UserCreate></UserCreate>
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
