const path = require("path");
const critical = require("critical");

critical.generate({
  inline: true,
  minify: true,
  base: "./_site",
  src: "index.html",
  dest: "index.html"
});
