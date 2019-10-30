import React from "react"
import PropTypes from "prop-types"

const icons = {
  behance: {
    path:
      "M18.003 12.333h-3.018c.289-1.977 2.902-1.715 3.018 0zM8.261 13H6v2.01h2.228c2.036 0 1.911-2.01.033-2.01zm-.08-4H6v2h2.389c1.673 0 1.938-2-.208-2zM24 0v24H0V0h24zM14 8h5V7h-5v1zm-3.552 3.618c1.907-.974 1.837-4.55-1.813-4.604H4v9.978h4.311c4.522 0 4.445-4.534 2.137-5.374zm9.487.602c-.274-1.763-1.529-2.95-3.583-2.95-2.095 0-3.352 1.34-3.352 3.947C13 15.848 14.368 17 16.417 17c2.048 0 3.106-1.135 3.4-2h-2.112c-.737.855-2.893.521-2.767-1.353h5.059c.01-.634-.011-1.089-.062-1.427z",
  },
  github: {
    path:
      "M24 24V0H0v24h8.6c.3-.1.4-.4.4-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .2.1.5.4.6H24z",
  },
  linkedin: {
    path:
      "M0 0v24h24V0H0zm7.1 20.5H3.6V9h3.6v11.5zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1zm15.1 13.1h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2z",
  },
  email: {
    path:
      "M24 0H0v24h24V0zm-5.9 14.9c-.9.9-2.1 1.4-3.3 1.4-.7 0-1.2-.3-1.5-.7-.1-.1-.1-.2-.2-.5-.7.8-1.4 1.1-2.3 1.1C9.1 16.3 8 15 8 13c0-3 1.9-5.4 4.3-5.4 1 0 1.5.2 1.9 1l.2-.6h2.1c-.1.4-.4 1.4-.5 1.8l-1.1 3.9c-.1.2-.1.4-.1.5 0 .3.2.4.5.4s.8-.2 1.1-.5c.9-.7 1.4-2 1.4-3.3 0-1.6-.8-3-2-3.8-.8-.5-1.9-.7-3.1-.7-3.7 0-6.3 2.5-6.3 5.9 0 3.4 2.3 5.6 5.8 5.6.9 0 1.9-.1 2.7-.4.7-.2 1.1-.4 2-.9L18 18c-.9.6-1.4.8-2.2 1-1.2.4-2.5.6-3.7.6-2.5 0-4.4-.7-5.8-2.1-1.3-1.3-2-3.2-2-5.2 0-2.2.7-4 2.1-5.5 1.6-1.6 3.7-2.4 6.4-2.4 4.1 0 7 2.6 7 6.3 0 1.7-.6 3.2-1.7 4.2z",
    secondPath:
      "M12.5 9.2c-.7 0-1.3.4-1.7 1.3-.4.8-.7 1.8-.7 2.6 0 .9.4 1.4 1 1.4s1.3-.5 1.7-1.4c.4-.8.7-1.9.7-2.7 0-.7-.4-1.2-1-1.2z",
  },
}

/**
 * A list of SVG icons
 */
const Icon = ({ icon, title, className, secondPath }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    labelledby="iconTitle"
    role="img"
    height="24"
    width="24"
  >
    <title id="iconTitle">{title}</title>
    <path d={icons[icon].path} />
    {icons[icon].secondPath && <path d={icons[icon].secondPath} />}
  </svg>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  secondPath: PropTypes.string,
}

Icon.defaultProps = {
  className: "",
  secondPath: "",
}

export default Icon