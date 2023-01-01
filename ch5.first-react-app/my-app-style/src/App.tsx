import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34 !important;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            <Header>
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                <AppLogo src={logo} alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <AppLink
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </AppLink>
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
                {/*</header>*/}
            </Header>
        </div>
    );
}

export default App;
