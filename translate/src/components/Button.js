import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // 使用 Consumer 不需要設定 contextType
  renderSubmit = (value) => {
    return value.language === 'english' ? 'submit' : '送出';
  };
  renderButton = (color) => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>{(value) => this.renderSubmit(value)}</LanguageContext.Consumer>
    </button>
  );

  render() {
    return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
  }
}

export default Button;
