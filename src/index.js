import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './components/App';
import {PageContentProvider} from "./contextAPI/contentContext";
import {fetchLanguage} from "./helpers/fetchLanguage";

ReactDOM.render(
  <React.StrictMode>
      <PageContentProvider fetchLanguage={fetchLanguage}>
        <App />
      </PageContentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);