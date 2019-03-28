import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import css from './test.module.scss'
import style from './style.module.less'
import { Button, WhiteSpace } from 'antd-mobile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className={css.code}>说的就是看到富士康的富士康部分都是萨科技局三</p>
          <p className={style.code}>说的就是看到富士康的富士康部分都是萨科技局三</p>
          <div className={`default ${css.xx}`}><Button>default</Button><WhiteSpace /></div>

          <Button disabled>default disabled</Button><WhiteSpace />
          <div className={"primary"}>
            <Button type="primary">primary</Button><WhiteSpace />
          </div>
          <Button type="primary">primary</Button><WhiteSpace />
          <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

          <Button type="warning">warning</Button><WhiteSpace />
          <Button type="warning" disabled>warning disabled</Button><WhiteSpace />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
