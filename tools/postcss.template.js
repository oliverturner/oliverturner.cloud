const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const postcssConfig = require("./postcss.config");

module.exports = (fileName, theme) =>
  class {
    async data() {
      const rawFilepath = path.join(__dirname, `../src/_includes/css/${fileName}`);
      return {
        permalink: fileName,
        rawFilepath,
        rawCss: await fs.readFileSync(rawFilepath)
      };
    }

    async render({ rawCss, rawFilepath }) {
      return await postcss(postcssConfig(theme))
        .process(rawCss, { from: rawFilepath })
        .then(result => result.css);
    }
  };
