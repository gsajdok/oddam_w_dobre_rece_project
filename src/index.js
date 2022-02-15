import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './components/App';
import {UserAuthProvider} from "./contextAPI/userAuthContext";

ReactDOM.render(
  <React.StrictMode>
      <UserAuthProvider>
        <App />
      </UserAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);