import React from 'react';
import { render, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from '../../../../components/atoms/Heading/Heading';

describe('Heading test', () => {
  const testTile = 'Test title';
  it('Should be H1 with "biggest" prop', () => {
    act(() => {
      render(<Heading headingContent={testTile} headingSize="biggest" />);
    });
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.outerHTML).toEqual(`<h1>${testTile}</h1>`);
    expect(heading.innerHTML).toEqual(testTile);
    expect(screen.getByText(testTile)).toBeInTheDocument();
  });

  it('Should be H2 with "big" prop', () => {
    act(() => {
      render(<Heading headingContent={testTile} headingSize="big" />);
    });
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.outerHTML).toEqual(`<h2>${testTile}</h2>`);
    expect(heading.innerHTML).toEqual(testTile);
  });

  it('Should be H3 with "medium" prop', () => {
    act(() => {
      render(<Heading headingContent={testTile} headingSize="medium" />);
    });
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.outerHTML).toEqual(`<h3>${testTile}</h3>`);
    expect(heading.innerHTML).toEqual(testTile);
  });

  it('Should be H4 with "small" prop', () => {
    act(() => {
      render(<Heading headingContent={testTile} headingSize="small" />);
    });
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.outerHTML).toEqual(`<h4>${testTile}</h4>`);
    expect(heading.innerHTML).toEqual(testTile);
  });

  it('Should be H5 with "very-small" prop', () => {
    act(() => {
      render(<Heading headingContent={testTile} headingSize="very-small" />);
    });
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.outerHTML).toEqual(`<h5>${testTile}</h5>`);
    expect(heading.innerHTML).toEqual(testTile);
  });

  it('Should be H5 with "smallest" prop', () => {
    act(() => {
      render(<Heading headingContent={testTile} headingSize="smallest" />);
    });
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.outerHTML).toEqual(`<h6>${testTile}</h6>`);
    expect(heading.innerHTML).toEqual(testTile);
  });
});
