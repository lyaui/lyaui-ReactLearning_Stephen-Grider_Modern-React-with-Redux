import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

// gapi document https://developers.google.com/identity/sign-in/web/reference

class GoogleAuth extends React.Component {
  WEB_CLIENT_ID = '127199714627-jkjvrkgjn79utbipfel8vavr94f8v3v3.apps.googleusercontent.com';

  componentDidMount() {
    window.gapi.load('client', this.init);
  }

  init = async () => {
    await window.gapi.client.init({
      clientId: this.WEB_CLIENT_ID,
      scope: 'email',
    });
    // 回傳 GoogleAuth 的物件
    this.auth = window.gapi.auth2.getAuthInstance();
    // 先載入目前登入狀態
    this.onAuthChange(this.auth.isSignedIn.get());
    // 當 login 狀態發生改變時執行
    this.auth.isSignedIn.listen(this.onAuthChange);
  };
  // 設定登入狀態
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    if (!isSignedIn) this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderLoginButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon'></i>Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon'></i>Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderLoginButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
