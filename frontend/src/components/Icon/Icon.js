import React from 'react';
import PropTypes from 'prop-types';

const icons = {
  behance: {
    path: 'M18.003 12.333h-3.018c.289-1.977 2.902-1.715 3.018 0zM8.261 13H6v2.01h2.228c2.036 0 1.911-2.01.033-2.01zm-.08-4H6v2h2.389c1.673 0 1.938-2-.208-2zM24 0v24H0V0h24zM14 8h5V7h-5v1zm-3.552 3.618c1.907-.974 1.837-4.55-1.813-4.604H4v9.978h4.311c4.522 0 4.445-4.534 2.137-5.374zm9.487.602c-.274-1.763-1.529-2.95-3.583-2.95-2.095 0-3.352 1.34-3.352 3.947C13 15.848 14.368 17 16.417 17c2.048 0 3.106-1.135 3.4-2h-2.112c-.737.855-2.893.521-2.767-1.353h5.059c.01-.634-.011-1.089-.062-1.427z',
  },
  github: {
    path: 'M24 24V0H0v24h8.6c.3-.1.4-.4.4-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .2.1.5.4.6H24z',
  },
  linkedin: {
    path: 'M0 0v24h24V0H0zm7.1 20.5H3.6V9h3.6v11.5zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1zm15.1 13.1h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2z',
  },
  chevronDown: {
    path: 'M20.8 8.8 12 17.6 3.2 8.8 0 12l8.8 8.8L12 24l3.2-3.2L24 12z',
  },
  close: {
    path: 'M0 22.4 3.5 24 7 16.6l3.5 7.4 3.5-1.6L9.1 12l4.8-10.4L10.4 0 7 7.4 3.5 0 0 1.6 4.8 12 0 22.4z',
  },
};

/**
 * A list of SVG icons
 */
function Icon({ icon, description, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-labelledby="iconTitle"
      role="img"
      height="24"
      width="24"
    >
      <title id="iconTitle">{description}</title>
      <path d={icons[icon].path} />
    </svg>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
