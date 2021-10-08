import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Switcher from '../../atoms/Switcher/Switcher';

const StyledSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const InlineSwitcher = ({
  name,
  switchColor,
  notCheckedColor,
  defaultChecked,
  value,
  onChange,
  type,
  labelBeforeStyle,
  labelAfterStyle,
  labelBefore,
  labelAfter,
}) => (
  <StyledSwitchWrapper>
    <span style={labelBeforeStyle}>{labelBefore}</span>
    <Switcher
      name={name}
      switchColor={switchColor}
      notCheckedColor={notCheckedColor}
      defaultChecked={defaultChecked}
      value={value}
      onChange={onChange}
      type={type}
    />
    <span style={labelAfterStyle}>{labelAfter}</span>
  </StyledSwitchWrapper>
);

InlineSwitcher.propTypes = {
  notCheckedColor: PropTypes.string,
  switchColor: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelBeforeStyle: PropTypes.instanceOf(Object),
  labelAfterStyle: PropTypes.instanceOf(Object),
  labelBefore: PropTypes.string,
  labelAfter: PropTypes.string,
};

InlineSwitcher.defaultProps = {
  notCheckedColor: 'dark',
  defaultChecked: false,
  labelBeforeStyle: undefined,
  labelAfterStyle: undefined,
  labelBefore: '',
  labelAfter: '',
  type: 'checbox',
  value: null,
};

export default InlineSwitcher;
