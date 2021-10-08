import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  ${(props) =>
    props.notCheckedColor &&
    css`
      background: ${({ theme }) => theme[props.notCheckedColor]};
    `}
  margin: 10px;
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px rgba(0, 0, 0, 1);
  &:checked {
    ${(props) =>
      props.switchColor &&
      css`
        background: ${({ theme }) => theme[props.switchColor]};
        box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px rgba(0, 0, 0, 1);
      `}
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: linear-gradient(0deg, #000, #6b6b6b);
    border-radius: 20px;
    box-shadow: 0 0 0 1px #232323;
    transform: scale(0.98, 0.96);
    transition: 0.5s;
  }

  &:checked:before {
    left: 20px;
  }

  &:after {
    content: '';
    position: absolute;
    top: calc(50% - 2px);
    left: 20px;
    width: 0;
    height: 4px;
    background: linear-gradient(0deg, #6b6b6b, #000);
    border-radius: 50%;
  }
`;
const Switcher = ({
  notCheckedColor,
  name,
  defaultChecked,
  switchColor,
  value,
  type,
  onChange,
}) => (
  <StyledInput
    data-testid={name}
    onChange={onChange}
    type={type}
    value={value}
    notCheckedColor={notCheckedColor}
    switchColor={switchColor}
    name={name}
    id={name}
    defaultChecked={defaultChecked}
    data-test
  />
);

Switcher.propTypes = {
  notCheckedColor: PropTypes.string,
  switchColor: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Switcher.defaultProps = {
  notCheckedColor: 'dark',
  defaultChecked: false,
  type: 'checkbox',
};

export default Switcher;
