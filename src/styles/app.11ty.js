const postcssTemplate = require("../../tools/postcss.template");
const theme = require("../theme");

module.exports = postcssTemplate("app.css", theme);
