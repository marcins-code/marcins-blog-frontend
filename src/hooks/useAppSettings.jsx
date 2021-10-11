import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from './useWindowSize';

export const useAppSettings = (pageInitSettings) => {
  const storedValues = JSON.parse(localStorage.getItem('appSettings'));
  const [isAdminPage, setIsAdminPage] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const regex = /administration/g;
    const found = location.pathname.match(regex);
    setIsAdminPage(Boolean(found));
  }, [location]);

  const [appTheme, setAppTheme] = useState(
    storedValues ? storedValues.appTheme : pageInitSettings.appTheme,
  );

  const [appLanguage, setAppLanguage] = useState(
    storedValues ? storedValues.appLanguage : pageInitSettings.appLanguage,
  );

  const [navPosition, setNavPosition] = useState(
    storedValues ? storedValues.navPosition : pageInitSettings.navPosition,
  );
  const [isMobile, setIsMobile] = useState(false);
  const [rememberSettings, setRememberSettings] = useState(!!storedValues);
  const size = useWindowSize();
  useEffect(() => {
    setIsMobile(size.width <= 768);
  }, []);

  useEffect(() => {
    setIsMobile(size.width <= 768);
    // isMobile && setNavPosition('menu-top');
  }, [size]);

  useEffect(() => {
    if (rememberSettings) {
      localStorage.setItem(
        'appSettings',
        JSON.stringify({
          appTheme,
          navPosition,
          appLanguage,
        }),
      );
    } else {
      localStorage.removeItem('appSettings');
    }
  }, [rememberSettings]);

  useEffect(() => {
    if (rememberSettings) {
      localStorage.removeItem('appSettings');
      localStorage.setItem(
        'appSettings',
        JSON.stringify({
          appTheme,
          navPosition,
          appLanguage,
        }),
      );
    }
  }, [appTheme, navPosition, appLanguage]);
  const appThemeHandler = useCallback(
    (e) => {
      setAppTheme(e.target.dataset.apptheme);
    },
    [appTheme],
  );

  const langSwitcherHandler = useCallback(
    (e) => {
      setAppLanguage(e.target.checked ? 'en' : 'pl');
    }, [appLanguage],
  );

  const navPositionHandler = useCallback(
    (e) => {
      setNavPosition(e.target.checked ? 'sidebar' : 'menu-top');
    }, [navPosition],
  );

  const rememberSettingsHandler = useCallback(
    (e) => {
      setRememberSettings(e.target.checked);
    }, [rememberSettings],
  );

  return {
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
  };
};
