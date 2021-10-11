import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import fabricOfSquares from '../../../assets/images/background/fabric-of-squares.png';
import IconIcomoon from '../../atoms/IconIcomoon/IconIcomoon';

export const StyledBlogCard = styled.div`
  background-color: ${({ theme }) => theme.grey700};
  background-image: linear-gradient(
      to top,
      ${({ theme }) => (theme.themeName !== 'light'
    ? rgba(theme.globalBackgroundColor, 0.5)
    : rgba(theme.white, 0.65))},
      ${({ theme }) => (theme.themeName !== 'light'
    ? rgba(theme.globalBackgroundColor, 0.75)
    : rgba(theme.grey100, 0.3))}
        100%
    ),
    ${({ theme }) => (theme.themeName !== 'light'
    ? `url(  ${fabricOfSquares})`
    : 'url("https://www.transparenttextures.com/patterns/honey-im-subtle.png")')};

  box-shadow: 0 3px 8px 0
    ${({ theme }) => (theme.themeName !== 'light' ? theme.black : theme.grey500)};
  border-radius: 10px;
`;

const StyledCardWrapper = styled(StyledBlogCard)`
  background-image: linear-gradient(
      to top,
      ${({ theme }) => (theme.themeName !== 'light'
    ? rgba(theme.globalBackgroundColor, 0.6)
    : rgba(theme.white, 0.65))},
      ${({ theme }) => (theme.themeName !== 'light'
    ? rgba(theme.globalBackgroundColor, 0.5)
    : rgba(theme.grey100, 0.55))},
      ${({ theme }) => (theme.themeName !== 'light'
    ? rgba(theme.globalBackgroundColor, 0.6)
    : rgba(theme.grey100, 0.65))}
        100%
    ),
    url(${fabricOfSquares});

  border-radius: 14px;
  ${(props) => props.cardWidth === 'wide'
    && css`
      width: 80%;
    `}

  ${(props) => props.cardWidth === 'normal'
    && css`
      width: 60%;
    `}

  ${(props) => props.cardWidth === 'narrow'
    && css`
      width: 40%;
    `}

  ${(props) => props.title
    && css`
      padding-top: 0 !important;
      margin-top: 0 !important;
    `}
  overflow: hidden;
  > h2 {
    //   display: flex;
    padding: 15px 0 0 15px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    //  border-color: ${
  ({ theme }) => theme.themeName === 'dark' && rgba(theme.secondary, 0.4)
  //  || (theme.themeName === 'light' && theme.secondary)
  //  || (theme.themeName === 'chocolate' && rgba(theme.secondary, 0.5))};
  //  border-style: solid;
  //  border-width: 0 0 5px 0;

  //  box-shadow: 0 5px 80px 0 ${({ theme }) => rgba(darken(0.05, theme.secondary), 0.75)} inset;
}
    > span {
      margin-right: 10px;
    }
  }
`;

const StyledCardContent = styled.div`
  padding: 15px;
`;

const Card = ({
  title, titleIcon, children, cardWidth,
}) => (
  <StyledCardWrapper cardWidth={cardWidth} data-testid="card-wrapper">
    {title && (
      <h2 data-testid="card-title">
        {titleIcon && <IconIcomoon iconName={titleIcon} iconSize="3x" />}
        {title}
      </h2>
    )}
    <StyledCardContent data-testid="card-content">{children}</StyledCardContent>
  </StyledCardWrapper>
);

Card.propTypes = {
  title: PropTypes.string,
  titleIcon: PropTypes.string,
  children: PropTypes.node.isRequired,
  cardWidth: PropTypes.oneOf(['wide', 'normal', 'narrow']),
};
Card.defaultProps = {
  title: undefined,
  titleIcon: undefined,
  cardWidth: 'normal',
};

export default Card;
