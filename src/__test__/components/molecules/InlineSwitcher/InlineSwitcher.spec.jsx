import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../../../themes/appThemes';
import { commonColors } from '../../../../themes/commonCollors';
import InlineSwitcher from '../../../../components/molecules/InlineSwitcher/InlineSwitcher';

describe('Testing Inline Switcher', () => {
  it('Should be in the document ', () => {
    render(
      <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
        <InlineSwitcher
          switchColor="red"
          onChange={() => {}}
          name="switchTest"
          value="1"
          defaultChecked
        />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('switchTest')).toBeInTheDocument();
  });

  it('Should be label before ', () => {
    render(
      <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
        <InlineSwitcher
          switchColor="red"
          onChange={() => {}}
          name="switchTest"
          value="1"
          defaultChecked
          labelBefore="labelBefore"
        />
      </ThemeProvider>,
    );
    expect(screen.getByText('labelBefore')).toBeInTheDocument();
  });
  it('Should be label after ', () => {
    render(
      <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
        <InlineSwitcher
          switchColor="red"
          onChange={() => {}}
          name="switchTest"
          value="1"
          defaultChecked
          labelAfter="labelAfter"
        />
      </ThemeProvider>,
    );
    expect(screen.getByText('labelAfter')).toBeInTheDocument();
  });
});
