import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from "react-intl";
import localeData from "./../build/locales/data.json";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

addLocaleData([...en, ...es]);

const language = 'es'

let messages = localeData.en

if (language === 'es') {
  messages = localeData.es
} else {
  messages = localeData.en
}

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root'));
registerServiceWorker();
