export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src")
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/dropdown.css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/gpx");
    eleventyConfig.addPassthroughCopy("src/js");
};