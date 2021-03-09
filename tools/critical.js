const path = require("path");
const critical = require("critical");

critical.generate(
  {
    inline: true,
    minify: true,
    base: "./_site",
    src: "index.html",
    target: "index.html",
  },
  (err) => {
    console.log({ err });
  }
);
