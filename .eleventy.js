const eleventy = config => {
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("static");

  return {
    dir: {
      input: "src"
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplate: "njk",
    markdownTemplateEngine: "njk"
  };
};

module.exports = eleventy;
