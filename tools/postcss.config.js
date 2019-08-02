const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = ({ customMedia }) => ({
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      preserve: true,
      browsers: "last 2 versions",
      features: {
        "nesting-rules": true,
        "custom-media-queries": { importFrom: { customMedia } }
      }
    })
  ]
});
