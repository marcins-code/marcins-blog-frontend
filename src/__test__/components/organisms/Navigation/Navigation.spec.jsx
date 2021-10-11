import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import App from '../../../../App';
import { mainMenuItems } from '../../../../languages/menus';

beforeAll(() => {
  const toolsHookRoot = global.document.createElement('div');
  toolsHookRoot.setAttribute('id', 'tools-hook');
  const body = global.document.querySelector('body');
  body.appendChild(toolsHookRoot);
});

describe('Testing navigation', () => {
  beforeEach(async () => {
    act(() => {
      render(<App />);
    });
    act(() => {
      screen
        .getByTestId('toggle-show-settings-panel')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
  });
  describe('Navigation position tests', () => {
    it('Should be top-menu in document on open', () => {
      expect(screen.queryByTestId('top-navigation')).toBeInTheDocument();
      expect(screen.queryByTestId('sidebar-navigation')).not.toBeInTheDocument();
    });

    it('Should be sidebar menu in document when menuSwitch is checked and top-menu on click again', async () => {
      act(() => {
        screen.getByTestId('menuSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('menuSwitch')).toBeChecked();
      await new Promise((r) => setTimeout(r, 1500));
      expect(screen.queryByTestId('top-navigation')).not.toBeInTheDocument();
      expect(screen.queryByTestId('sidebar-navigation')).toBeInTheDocument();

      act(() => {
        screen.getByTestId('menuSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByTestId('menuSwitch')).not.toBeChecked();
      await new Promise((r) => setTimeout(r, 1500));
      expect(screen.queryByTestId('top-navigation')).toBeInTheDocument();
      expect(screen.queryByTestId('sidebar-navigation')).not.toBeInTheDocument();
    });
    it('Should be sidebar menu in document when menuSwitch is checked and top-menu on click again', async () => {
      act(() => {
        screen.getByTestId('menuSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      await new Promise((r) => setTimeout(r, 1500));
      expect(screen.queryByTestId('sidebar-navigation-nav')).toBeInTheDocument();
      expect(screen.queryByTestId('sidebar-navigation-nav')).toHaveStyleRule('min-height', '100vh');
      expect(screen.queryByTestId('sidebar-navigation-nav')).toHaveStyleRule('position', 'fixed');
    });
  });
  describe('Navigation links text test when lang is change', () => {
    it('Should be polish phrases on open in top-menu', async () => {
      expect(screen.getByText(mainMenuItems[0].name_pl)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[1].name_pl)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[2].name_pl)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[3].name_pl)).toBeInTheDocument();
    });

    it('Should be english phrases in top-menu when langSwitch is checked', async () => {
      act(() => {
        screen.getByTestId('langSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByText(mainMenuItems[0].name_en)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[1].name_en)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[2].name_en)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[3].name_en)).toBeInTheDocument();
    });

    it('Should be polish phrases sidebar sidebar menu', async () => {
      act(() => {
        screen.getByTestId('menuSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      await new Promise((r) => setTimeout(r, 1500));

      expect(screen.getByText('Homepage')).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[0].name_pl)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[1].name_pl)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[2].name_pl)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[3].name_pl)).toBeInTheDocument();
    });
    it('Should be english phrases in sidebar menu when langSwitch is checked', async () => {
      act(() => {
        screen.getByTestId('langSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      act(() => {
        screen.getByTestId('menuSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      await new Promise((r) => setTimeout(r, 1500));

      expect(screen.getByText('Homepage')).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[0].name_en)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[1].name_en)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[2].name_en)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[3].name_en)).toBeInTheDocument();
    });
  });
});
describe('Testing mobile navigation', () => {
  beforeEach(() => {
    act(() => {
      render(<App />);
    });
    global.innerWidth = 500;
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });
  });

  describe('Testing show hide toggle of mobile navigation ', () => {
    it('Should be mobile navigation toggle button on screen', async () => {
      expect(screen.getByTestId('mobile-navigation-toggle-button')).toBeInTheDocument();
    });

    it('Should be mobile navigation on screen when toggle button was clicked', async () => {
      act(() => {
        screen
          .getByTestId('mobile-navigation-toggle-button')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      await new Promise((r) => setTimeout(r, 1500));
      expect(screen.getByTestId('mobile-navigation-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('backdrop')).toBeInTheDocument();
    });

    it('Should be mobile hidden on screen when backdrop was clicked', async () => {
      act(() => {
        screen
          .getByTestId('mobile-navigation-toggle-button')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      await new Promise((r) => setTimeout(r, 1500));
      expect(screen.getByTestId('mobile-navigation-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('backdrop')).toBeInTheDocument();
      act(() => {
        screen.getByTestId('backdrop').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      await new Promise((r) => setTimeout(r, 1500));
      expect(screen.queryByTestId('mobile-navigation-wrapper')).not.toBeInTheDocument();
      expect(screen.queryByTestId('backdrop')).not.toBeInTheDocument();
    });
    it('Should be mobile hidden on screen when link was clicked', async () => {
      act(() => {
        screen
          .getByTestId('mobile-navigation-toggle-button')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      await new Promise((r) => setTimeout(r, 1500));
      expect(screen.getByTestId('mobile-navigation-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('backdrop')).toBeInTheDocument();
      act(() => {
        screen.getByText('kategorie').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.queryByTestId('mobile-navigation-wrapper')).not.toBeInTheDocument();
      expect(screen.queryByTestId('backdrop')).not.toBeInTheDocument();
    });
  });
  describe('Testing language switch in mobile navigation', () => {
    beforeEach(() => {
      act(() => {
        screen
          .getByTestId('toggle-show-settings-panel')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      act(() => {
        screen
          .getByTestId('mobile-navigation-toggle-button')
          .dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
    });
    it('Should be settings panel on screen', async () => {
      expect(screen.getByTestId('setting-panel-wrapper')).toBeInTheDocument();
    });

    it('Should be polish  links on screen', async () => {
      expect(screen.getByText('Homepage')).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[0].name_pl)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[1].name_pl)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[2].name_pl)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[3].name_pl)).toBeInTheDocument();
    });
    it('Should be english  links on screen when langSwitch is checked ', async () => {
      act(() => {
        screen.getByTestId('langSwitch').dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(screen.getByText('Homepage')).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[0].name_en)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[1].name_en)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[2].name_en)).toBeInTheDocument();
      expect(screen.getByText(mainMenuItems[3].name_en)).toBeInTheDocument();
    });
  });
});
