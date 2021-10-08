import React from 'react';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import SettingsPanel from '../../../../components/organisms/SettingsPanel/SettingsPanel';
import { darkTheme } from '../../../../themes/appThemes';
import { commonColors } from '../../../../themes/commonCollors';
import { settingsPanelItems } from '../../../../languages/settingsPanel';
import App from '../../../../App';

beforeAll(() => {
  const toolsHookRoot = global.document.createElement('div');
  toolsHookRoot.setAttribute('id', 'tools-hook');
  const body = global.document.querySelector('body');
  body.appendChild(toolsHookRoot);
});

afterAll(cleanup);

describe('Testing Settings panel', () => {
  describe('Testing show hide actions', () => {
    beforeEach(() => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <SettingsPanel />
          </ThemeProvider>,
        );
      });
    });

    afterAll(cleanup);
    it('Should be setting-panel-toggle button on screen', async () => {
      expect(screen.getByTestId('toggle-show-settings-panel')).toBeInTheDocument();
    });

    it('Should setting-panel-toggle button have rotating icon on hover', async () => {
      expect(screen.getByTestId('iconmoon')).toBeInTheDocument();
      act(() => {
        screen
          .getByTestId('toggle-show-settings-panel')
          .dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      });
      expect(screen.getByTestId('iconmoon')).toHaveClass('icon-spin');
    });

    it('Should be settingsPanel and all elements on screen when setting-panel-toggle button is clicked', async () => {
      act(() => {
        screen
          .getByTestId('toggle-show-settings-panel')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      await waitFor(() => {
        expect(screen.getByTestId('setting-panel-wrapper')).toBeInTheDocument();
        expect(screen.getByTestId('toggle-hide-settings-panel')).toBeInTheDocument();
        expect(screen.getByTestId('langSwitch')).toBeInTheDocument();
        expect(screen.getByTestId('menuSwitch')).toBeInTheDocument();
        expect(screen.getByTestId('rememberSettings')).toBeInTheDocument();
        expect(screen.getByTestId('toggle-dark-theme')).toBeInTheDocument();
        expect(screen.getByTestId('toggle-light-theme')).toBeInTheDocument();
        expect(screen.getByTestId('toggle-chocolate-theme')).toBeInTheDocument();
      });
    });

    it('Should be panel hidden when toggle-hide-settings-panel button is clicked ', async () => {
      act(() => {
        screen
          .queryByTestId('toggle-show-settings-panel')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      act(() => {
        screen
          .getByTestId('toggle-hide-settings-panel')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      await waitFor(() => {
        expect(screen.queryByTestId('setting-panel-wrapper')).not.toBeInTheDocument();
      });
    });
  });

  describe('Testing are switchers checked after click ', () => {
    beforeEach(() => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <SettingsPanel />
          </ThemeProvider>,
        );
        act(() => {
          screen
            .getByTestId('toggle-show-settings-panel')
            .dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
      });
    });

    afterAll(cleanup);

    it('Should be setting panel on screen', async () => {
      expect(screen.getByTestId('setting-panel-wrapper')).toBeInTheDocument();
    });
    it('Should be langSwitch checked on click and not checked when clicked again', async () => {
      act(() => {
        screen.getByTestId('langSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('langSwitch')).toBeChecked();
      act(() => {
        screen.getByTestId('langSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('langSwitch')).not.toBeChecked();
    });

    it('Should be menuSwitch checked on click and not checked when clicked again', async () => {
      act(() => {
        screen.getByTestId('menuSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('menuSwitch')).toBeChecked();
      act(() => {
        screen.getByTestId('menuSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('menuSwitch')).not.toBeChecked();
    });

    it('Should be rememberSettings checked on click and not checked when clicked again', async () => {
      act(() => {
        screen
          .getByTestId('rememberSettings')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('rememberSettings')).toBeChecked();
      act(() => {
        screen
          .getByTestId('rememberSettings')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('rememberSettings')).not.toBeChecked();
    });
  });

  describe('testing switchers and buttons behaviour', () => {
    beforeEach(() => {
      act(() => {
        render(<App />);
      });
      act(() => {
        screen
          .getByTestId('toggle-show-settings-panel')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
    });

    afterAll(cleanup);

    it('Should be setting panel on screen', async () => {
      expect(screen.getByTestId('setting-panel-wrapper')).toBeInTheDocument();
    });

    it('Should be active class for default theme button and after click on button', async () => {
      expect(screen.getByTestId('toggle-dark-theme')).toBeInTheDocument();
      expect(screen.getByTestId('toggle-light-theme')).toBeInTheDocument();
      expect(screen.getByTestId('toggle-chocolate-theme')).toBeInTheDocument();

      expect(screen.getByTestId('toggle-dark-theme')).toHaveClass('active');
      expect(screen.getByTestId('toggle-light-theme')).not.toHaveClass('active');
      expect(screen.getByTestId('toggle-chocolate-theme')).not.toHaveClass('active');

      act(() => {
        screen
          .getByTestId('toggle-light-theme')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      expect(screen.getByTestId('toggle-dark-theme')).not.toHaveClass('active');
      expect(screen.getByTestId('toggle-light-theme')).toHaveClass('active');
      expect(screen.getByTestId('toggle-chocolate-theme')).not.toHaveClass('active');

      act(() => {
        screen
          .getByTestId('toggle-chocolate-theme')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('toggle-dark-theme')).not.toHaveClass('active');
      expect(screen.getByTestId('toggle-light-theme')).not.toHaveClass('active');
      expect(screen.getByTestId('toggle-chocolate-theme')).toHaveClass('active');

      act(() => {
        screen
          .getByTestId('toggle-dark-theme')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('toggle-dark-theme')).toHaveClass('active');
      expect(screen.getByTestId('toggle-light-theme')).not.toHaveClass('active');
      expect(screen.getByTestId('toggle-chocolate-theme')).not.toHaveClass('active');
    });

    it('Should be proper phrases with selected language', async () => {
      const langSwitch = screen.getByTestId('langSwitch');
      expect(screen.getByText(settingsPanelItems.pl.chooseLanguage)).toBeInTheDocument();
      expect(screen.getByText(settingsPanelItems.pl.chooseTheme)).toBeInTheDocument();
      expect(screen.getByText(settingsPanelItems.pl.chooseLayout)).toBeInTheDocument();
      expect(screen.getByText(settingsPanelItems.pl.rememberSettingsPH)).toBeInTheDocument();
      act(() => {
        langSwitch.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(langSwitch).toBeChecked();
      expect(screen.getByText(settingsPanelItems.en.chooseLanguage)).toBeInTheDocument();
      expect(screen.getByText(settingsPanelItems.en.chooseTheme)).toBeInTheDocument();
      expect(screen.getByText(settingsPanelItems.en.chooseLayout)).toBeInTheDocument();
      expect(screen.getByText(settingsPanelItems.en.rememberSettingsPH)).toBeInTheDocument();
    });

    it('Should be setting panel on screen', async () => {
      expect(screen.getByTestId('rememberSettings')).toBeInTheDocument();
      act(() => {
        screen
          .getByTestId('rememberSettings')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('rememberSettings')).toBeChecked();
      expect(window.localStorage.key('appSettings')).toBeTruthy();
    });
  });
});
