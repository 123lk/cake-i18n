import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import localeData from "../build/locales/data.json";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

// This function will map the current redux state to the props for the component that it is "connected" to.
// When the state of the redux store changes, this function will be called, if the props that come out of
// this function are different, then the component that is wrapped is re-rendered.
function mapStateToProps(state) {
  return { locale: state.languageReducer.language, messages: state.languageReducer.language === 'en' ? localeData.en : localeData.es  };
}

export default connect(mapStateToProps)(IntlProvider);