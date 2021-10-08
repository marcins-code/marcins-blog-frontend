import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ headingSize, headingContent }) => (headingSize === 'biggest' && <h1>{headingContent}</h1>)
  || (headingSize === 'big' && <h2>{headingContent}</h2>)
  || (headingSize === 'medium' && <h3>{headingContent}</h3>)
  || (headingSize === 'small' && <h4>{headingContent}</h4>)
  || (headingSize === 'very-small' && <h5>{headingContent}</h5>)
  || (headingSize === 'smallest' && <h6>{headingContent}</h6>);
Heading.propTypes = {
  headingSize: PropTypes.oneOf(['biggest', 'big', 'medium', 'small', 'very-small', 'smallest'])
    .isRequired,
  headingContent: PropTypes.string.isRequired,
};

export default Heading;
