import React from 'react';
import PropTypes from 'prop-types';

const IconIcomoon = ({ iconName, iconSize, spin, moreClasses, onClick }) => (
  <span
    data-testid="iconmoon"
    role="none"
    onClick={onClick}
    className={[
      `icon-${iconName}`,
      spin ? 'icon-spin' : '',
      `icon-${iconSize}`,
      `${moreClasses}`,
    ].join(' ')}
  />
);

IconIcomoon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  spin: PropTypes.bool,
  moreClasses: PropTypes.string,
  onClick: PropTypes.func,
};

IconIcomoon.defaultProps = {
  iconSize: '1x',
  spin: false,
  moreClasses: '',
  onClick: undefined,
};

export default IconIcomoon;
