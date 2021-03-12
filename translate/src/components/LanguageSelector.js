import React from 'react';
// 這裡輸出的是 export defalut 的 Context （名字是自取的）
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <i className='flag us' onClick={() => this.context.onLanguageChange('english')} />
        <i
          className='flag tw'
          onClick={() => this.context.onLanguageChange('tranditional-chinese')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
