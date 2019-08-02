const config = {
  mq: {
    small: 496,
    medium: 768,
    large: 960,
    xlarge: 1200
  }
};

/**
 * Turns config.mq above into a customMedia rules:
 * {
 *   "--mq-s": "496px",
 *   "--mq-m": "768px,
 *   ...
 * }
 */
const customMedia = Object.entries(config.mq).reduce((acc, [k, v]) => {
  return { ...acc, [`--mq-${k}`]: `(min-width: ${v}px)` };
}, {});

module.exports = {
  customMedia
};
