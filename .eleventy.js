// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("planets", function(name, name2, AU) {
    return `<div class="planet">
    <div class="circle ${name2}"></div>
    <h2 class="name">${name}</h2>
    <p>${AU}</p>
  </div>`
  })
};