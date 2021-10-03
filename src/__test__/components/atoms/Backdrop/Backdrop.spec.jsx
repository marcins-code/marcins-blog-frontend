import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Backdrop from '../../../../components/atoms/Backdrop/Backdrop';

afterEach(cleanup);

describe('Backdrop tests', () => {
  test('Should not be on screen with backdropShow false', () => {
    render(<Backdrop backdropShow={false} onClick={() => {}} />);
    const backdrop = screen.queryByTestId('backdrop');
    expect(backdrop).not.toBeInTheDocument();
  });

  test('Should be on screen with backdropShow true', async () => {
    render(<Backdrop backdropShow onClick={() => {}} />);
    const backdrop = screen.queryByTestId('backdrop');
    await waitFor(() => {
      expect(backdrop).toBeInTheDocument();
    });
  });
});
