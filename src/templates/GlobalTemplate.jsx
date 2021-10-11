import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeMixer } from '../themes/ThemeMixer';
import { AppSettingsContext } from '../context';
import GlobalStyle from '../themes/GlobalStyle';
import { useAppSettings } from '../hooks/useAppSettings';
import SettingsPanel from '../components/organisms/SettingsPanel/SettingsPanel';

const GlobalTemplate = ({ children }) => {
  const pageInitSettings = {
    appTheme: 'dark',
    appLanguage: 'pl',
    navPosition: 'menu-top',
    isAdminPage: false,
  };

  const {
    appTheme,
    appThemeHandler,
    appLanguage,
    langSwitcherHandler,
    navPosition,
    navPositionHandler,
    isMobile,
    rememberSettings,
    rememberSettingsHandler,
    isAdminPage,
  } = useAppSettings(pageInitSettings);

  // const [timeLeft, setTimeLeft] = useState(null);
  // const auth = useContext(AuthContext);
  // const date = new Date(auth.tokenExpiration);
  // const now = new Date(Date.now());
  // console.log(now.toLocaleTimeString());
  // console.log(date);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setTimeLeft(now);
  //     // setTimeLeft((auth.tokenExpiration - (new Date(Date.now()).getTime())) / 1000);
  //     //   time = (date - new Date(Date.now()).getTime() );
  //       console.log(new Date(date - new Date(Date.now())).getSeconds());
  //       console.log(new Date(date - new Date(Date.now())).getMinutes());
  //   }, 1000);
  //
  //   return () => clearInterval(interval);
  // }, []);
  const theme = ThemeMixer(appTheme, pageInitSettings);
  return (
    <AppSettingsContext.Provider
      value={{
        appTheme,
        appThemeHandler,
        appLanguage,
        langSwitcherHandler,
        navPosition,
        navPositionHandler,
        isMobile,
        rememberSettings,
        rememberSettingsHandler,
        isAdminPage,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle appTheme={appTheme} />
        <SettingsPanel />
        {children}
      </ThemeProvider>
    </AppSettingsContext.Provider>
  );
};

GlobalTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalTemplate;
