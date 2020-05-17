import React from 'react';
import { Layout, Content } from 'react-mdl';
import { Navbar } from 'react-bootstrap';
import Main from './components/main';
import './App.css';
import logo from './assets/logo.png';


function App() {
  return (
    <div className="navbar">
      <Layout>
        <Navbar>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

