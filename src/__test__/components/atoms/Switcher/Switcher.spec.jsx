import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../../../themes/appThemes';
import { commonColors } from '../../../../themes/commonCollors';
import Switcher from '../../../../components/atoms/Switcher/Switcher';

describe('Switcher test', () => {
  it('It should be proper behaviour on click', () => {
    const mockCallBack = jest.fn();
    act(() => {
      render(
        <Switcher
          switchColor="blue"
          onChange={mockCallBack}
          value="someValue"
          name="someName"
          type="checkbox"
          defaultChecked={false}
        />,
      );
    });
    act(() => {
      screen.getByRole('checkbox').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(mockCallBack).toBeCalledTimes(1);
  });

  it('Should be checkbox not checked', async () => {
    const mockCallBack = jest.fn();
    act(() => {
      render(
        <Switcher
          switchColor="blue"
          onChange={mockCallBack}
          value="someValue"
          name="someName"
          type="checkbox"
          defaultChecked={false}
        />,
      );
    });
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'someName');
    expect(screen.getByRole('checkbox')).toHaveAttribute('type', 'checkbox');
    expect(screen.getByRole('checkbox')).toHaveAttribute('value', 'someValue');
    expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'someName');
    expect(mockCallBack).toBeCalledTimes(0);
  });
  it('Should be checkbox checked', async () => {
    act(() => {
      render(
        <Switcher
          switchColor="blue"
          onChange={() => {}}
          value="someValue"
          name="someName"
          type="checkbox"
          defaultChecked
        />,
      );
    });
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'someName');
    expect(screen.getByRole('checkbox')).toHaveAttribute('type', 'checkbox');
    expect(screen.getByRole('checkbox')).toHaveAttribute('value', 'someValue');
  });
  it('Should have proper colors and behaviour', async () => {
    act(() => {
      render(
        <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
          <Switcher
            notCheckedColor="blue"
            switchColor="chocolate"
            onChange={() => {}}
            value="someValue"
            name="someName"
            type="checkbox"
            defaultChecked
          />
        </ThemeProvider>,
      );
    });
    await waitFor(() => {
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
      expect(screen.getByRole('checkbox')).toBeChecked();
      expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'someName');
      expect(screen.getByRole('checkbox')).toHaveAttribute('type', 'checkbox');
      expect(screen.getByRole('checkbox')).toHaveStyleRule('background', commonColors.chocolate, {
        modifier: '&:checked',
      });
      fireEvent.click(screen.getByRole('checkbox'));
      expect(screen.getByRole('checkbox')).not.toBeChecked();
      expect(screen.getByRole('checkbox')).toHaveStyleRule('background', commonColors.blue);
    });
  });
});
