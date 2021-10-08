import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../../../themes/appThemes';
import { commonColors } from '../../../../themes/commonCollors';
import RegularButton from '../../../../components/molecules/Button/RegularButton';

describe('Testing regular button ', () => {
  const buttonLabel = 'Some button';
  it('Should be in the document ', () => {
    act(() => {
      render(
        <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
          <RegularButton type="button" buttonLabel={buttonLabel} />
        </ThemeProvider>,
      );
    });
    const button = screen.getByText(buttonLabel);
    expect(button).toBeInTheDocument();
  });

  it('Should be proper behaviour onClick ', () => {
    const mockCallBack = jest.fn();
    act(() => {
      render(
        <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
          <RegularButton type="button" buttonLabel={buttonLabel} onClick={mockCallBack} />
        </ThemeProvider>,
      );
    });
    const button = screen.getByText(buttonLabel);
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(mockCallBack).toBeCalledTimes(1);
  });

  it('Should be button with span and correct class  when prop buttonIcon is given', () => {
    act(() => {
      render(
        <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
          <RegularButton type="button" buttonLabel={buttonLabel} buttonIcon="bowl" />
        </ThemeProvider>,
      );
    });
    const button = screen.getByText(buttonLabel);
    expect(button).toBeInTheDocument();
    expect(button.innerHTML).toMatch(/span/);
    expect(button.innerHTML).toMatch(/icon-bowl/);
  });
  it('Should be proper style without buttonColor and buttonSize  props ', () => {
    act(() => {
      render(
        <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
          <RegularButton type="button" buttonLabel={buttonLabel} buttonIcon="bowl" />
        </ThemeProvider>,
      );
    });
    const button = screen.getByText(buttonLabel);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('padding', '10px 20px');
    expect(button).toHaveStyleRule('border-radius', '14px');
    expect(button).toHaveStyleRule('margin-right', '10px');
    expect(button).toHaveStyleRule('color', commonColors.grey200);
    expect(button).toHaveStyleRule('border', 'none');
    expect(button).toHaveStyleRule('text-shadow', '0 1px 1px rgba(0,0,0,0.5)');
    expect(button).toHaveStyleRule('cursor', 'pointer');
    expect(button).toHaveStyleRule('background', expect.stringContaining(darkTheme.primary));
  });

  it('Should be proper style with buttonColor  props ', () => {
    act(() => {
      render(
        <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
          <RegularButton
            type="button"
            buttonLabel={buttonLabel}
            buttonIcon="bowl"
            buttonColor="orange"
          />
        </ThemeProvider>,
      );
    });
    const button = screen.getByText(buttonLabel);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('background', expect.stringContaining(commonColors.orange));
  });

  it('Should be proper style with buttonColor and buttonSize="buttonSmall" props', () => {
    act(() => {
      render(
        <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
          <RegularButton
            type="button"
            buttonLabel={buttonLabel}
            buttonIcon="bowl"
            buttonColor="red"
            buttonSize="buttonSmall"
          />
        </ThemeProvider>,
      );
    });
    const button = screen.getByText(buttonLabel);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('background', expect.stringContaining(commonColors.red));
    expect(button).toHaveStyleRule('padding', '5px 15px');
    expect(button).toHaveStyleRule('font-size', '1.5rem');
  });

  it('Should be proper style with buttonColor and buttonSize="buttonSmall"  props', () => {
    act(() => {
      render(
        <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
          <RegularButton
            type="button"
            buttonLabel={buttonLabel}
            buttonIcon="bowl"
            buttonColor="blue"
            buttonSize="buttonBig"
          />
        </ThemeProvider>,
      );
    });
    const button = screen.getByText(buttonLabel);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('background', expect.stringContaining(commonColors.blue));
    expect(button).toHaveStyleRule('padding', '15px 25px');
    expect(button).toHaveStyleRule('font-size', '2.3rem');
    expect(button).toHaveStyleRule('text-shadow', '1px 2px 2px rgba(0,0,0,0.5)');
  });
  it('Should be proper type when prop type is given', () => {
    act(() => {
      render(
        <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
          <RegularButton
            type="submit"
            buttonLabel={buttonLabel}
            buttonIcon="bowl"
            buttonColor="blue"
            buttonSize="buttonBig"
          />
        </ThemeProvider>,
      );
    });
    const button = screen.getByText(buttonLabel);
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });
});
