import React from 'react';
import './App.css'
import GoodBye from './components/GoodBye/GoodBye'
import Hello from './components/Hello/Hello'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Text isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function Text({isLoggedIn = false}) {
 
  const RenderIf = () => {
    if (isLoggedIn) {
      return (<div className="App"><Hello/></div>);
    }
    return (<div className="App"><GoodBye /></div>);
  }

  const RenderTernary = () => {
    isLoggedIn  
    ? <Hello></Hello>
    : <GoodBye></GoodBye>
  }

  const RenderSwitch = () => {
    switch (isLoggedIn) {  
      case true:
        return <Hello></Hello>;
      case false:
        return <GoodBye></GoodBye>;
      default:
        return null;
    }
  }

  return (

    <div>
      {
        RenderIf()
        //RenderTernary()
        //RenderSwitch()
      }
    </div>

  )

}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default App
