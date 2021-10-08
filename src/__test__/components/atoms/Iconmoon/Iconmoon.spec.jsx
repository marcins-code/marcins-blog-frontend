import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconIcomoon from '../../../../components/atoms/IconIcomoon/IconIcomoon';

describe('Iconmoon tests', () => {
  it('Should be in document ', async () => {
    act(() => {
      render(<IconIcomoon iconName="arrow-left" />);
    });
    expect(screen.getByTestId('iconmoon')).toBeInTheDocument();
  });

  it('Should have icon class  ', async () => {
    act(() => {
      render(<IconIcomoon iconName="arrow-left" />);
    });
    expect(screen.getByTestId('iconmoon')).toHaveClass('icon-arrow-left');
  });

  it('Should have size class  with iconSize prop ', async () => {
    act(() => {
      render(<IconIcomoon iconSize="3x" iconName="arrow-left" />);
    });
    expect(screen.getByTestId('iconmoon')).toHaveClass('icon-3x');
  });

  it('Should have spin class  with spin prop ', async () => {
    act(() => {
      render(<IconIcomoon spin iconName="arrow-left" />);
    });
    expect(screen.getByTestId('iconmoon')).toHaveClass('icon-spin');
  });
  it('Should have extra class  with moreClasses prop ', async () => {
    act(() => {
      render(<IconIcomoon moreClasses="someClass" iconName="arrow-left" />);
    });
    expect(screen.getByTestId('iconmoon')).toHaveClass('someClass');
  });
});
