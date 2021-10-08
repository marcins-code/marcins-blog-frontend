import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Backdrop from '../../../../components/atoms/Backdrop/Backdrop';

describe('Backdrop tests', () => {
  test('Should not be on screen with backdropShow false', () => {
    act(() => {
      render(<Backdrop backdropShow={false} onClick={() => {}} />);
    });
    expect(screen.queryByTestId('backdrop')).not.toBeInTheDocument();
  });

  test('Should be on screen with backdropShow true', async () => {
    act(() => {
      render(<Backdrop backdropShow onClick={() => {}} />);
    });
    await waitFor(() => {
      expect(screen.queryByTestId('backdrop')).toBeInTheDocument();
    });
  });

  test('Should be on on click function called once', async () => {
    const mockOnClick = jest.fn();
    act(() => {
      render(<Backdrop backdropShow onClick={mockOnClick} />);
    });
    expect(mockOnClick).toBeCalledTimes(0);

    act(() => {
      screen.queryByTestId('backdrop').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
