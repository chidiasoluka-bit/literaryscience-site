module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Custom collection: studio entries sorted by date descending
  eleventyConfig.addCollection("studio", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/studio/*.md").sort((a, b) => {
      return (b.data.date || 0) - (a.data.date || 0);
    });
  });

  // Custom collection: toolkit items sorted by order
  eleventyConfig.addCollection("toolkit", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/toolkit/*.md").sort((a, b) => {
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });

  // Date filter for display
  eleventyConfig.addFilter("monthYear", function(date) {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
