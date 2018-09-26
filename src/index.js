import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { addLocaleData } from "react-intl";
import localeData from "./../build/locales/data.json";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import { Provider } from 'react-redux'
import configureStore from './store';
import ConnectedIntlProvider from './ConnectedIntlProvider';

addLocaleData([...en, ...es]);

let language = 'en'

let messages = localeData.en

if (language === 'es') {
  messages = localeData.es
} else {
  messages = localeData.en
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedIntlProvider messages={messages}>
      <BrowserRouter>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
