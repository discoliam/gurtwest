module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src/site",
      output: "build",
      includes: "_includes"
    },
    templateFormats: ["liquid", "md"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
