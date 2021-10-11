import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { rgba } from 'polished';
import { chocolateTheme, darkTheme, lightTheme } from '../../../../themes/appThemes';
import { commonColors } from '../../../../themes/commonCollors';
import Card from '../../../../components/molecules/Card/Card';

describe('Testing Card component ', () => {
  const cardTitle = 'Card title';
  const cardContent = 'Card content';
  const cardIcon = 'disk';
  describe('Testing structure and size props', () => {
    it('Should be simple card without any props but children ', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <Card>
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('card-content')).toBeInTheDocument();
      expect(screen.getByText(cardContent)).toBeInTheDocument();
    });
    it('Should be card title in document when title prop is given ', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <Card title={cardTitle}>
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('card-content')).toBeInTheDocument();
      expect(screen.getByRole('heading')).toBeInTheDocument();
      expect(screen.getByText(cardTitle)).toBeInTheDocument();
      expect(screen.getByText(cardContent)).toBeInTheDocument();
    });
    it('Should be card title and icon in document when title and icon props are given ', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <Card title={cardTitle} titleIcon={cardIcon}>
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('card-content')).toBeInTheDocument();
      expect(screen.getByTestId('iconmoon')).toBeInTheDocument();
      expect(screen.getByTestId('iconmoon')).toHaveClass(`icon-${cardIcon}`);
      expect(screen.getByRole('heading')).toBeInTheDocument();
      expect(screen.getByText(cardTitle)).toBeInTheDocument();
      expect(screen.getByText(cardContent)).toBeInTheDocument();
    });
    it('Should be card width 60% when cardWidth prop is not given ', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <Card title={cardTitle} titleIcon={cardIcon}>
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('width', '60%');
    });
    it('Should be card width 60% when cardWidth prop is "normal"', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <Card title={cardTitle} titleIcon={cardIcon} cardWidth="normal">
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('width', '60%');
    });
    it('Should be card width 40% when cardWidth prop is "narrow"', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <Card title={cardTitle} titleIcon={cardIcon} cardWidth="narrow">
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('width', '40%');
    });
    it('Should be card width 40% when cardWidth prop is "wide"', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <Card title={cardTitle} titleIcon={cardIcon} cardWidth="wide">
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('width', '80%');
    });
  });

  describe('Testing Card theming', () => {
    it('Should be proper styling with darkTheme ', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
            <Card>
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining('linear-gradient'));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining('fabric-of-squares.png'));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining(rgba(darkTheme.globalBackgroundColor, 0.5)));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining(rgba(darkTheme.globalBackgroundColor, 0.6)));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('border-radius', '14px');
    });
    it('Should be proper styling with chocolateTheme ', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...chocolateTheme, ...commonColors }}>
            <Card>
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining('linear-gradient'));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining('fabric-of-squares.png'));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining(rgba(chocolateTheme.globalBackgroundColor, 0.5)));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining(rgba(chocolateTheme.globalBackgroundColor, 0.6)));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('border-radius', '14px');
    });
    it('Should be proper styling with light ', () => {
      act(() => {
        render(
          <ThemeProvider theme={{ ...lightTheme, ...commonColors }}>
            <Card>
              <p>{cardContent}</p>
            </Card>
          </ThemeProvider>,
        );
      });
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining('linear-gradient'));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining('fabric-of-squares.png'));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining(rgba(commonColors.grey100, 0.55)));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('background-image', expect.stringContaining(rgba(commonColors.white, 0.65)));
      expect(screen.getByTestId('card-wrapper')).toHaveStyleRule('border-radius', '14px');
    });
  });
  // describe('Test with dark theme', () => {
  //   beforeEach(() => {
  //     act(() => {
  //       render(
  //         <ThemeProvider theme={{ ...darkTheme, ...commonColors }}>
  //           <Card>
  //             <Heading headingContent="Heading" headingSize="medium" />
  //           </Card>
  //         </ThemeProvider>,
  //       );
  //     });
  //   });
  // });
});
