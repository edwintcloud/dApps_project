import React from 'react';
import ReactDOM from 'react-dom';
import { Drizzle } from 'drizzle';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SVGToken from './contracts/SVGToken.json';

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [SVGToken],
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545',
    },
  },
};

// setup drizzle
const drizzle = new Drizzle(options);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
