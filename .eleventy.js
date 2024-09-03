module.exports = (config) => {
  config.addWatchTarget("./assets/css");

  config.addPassthroughCopy("./assets");
  config.addPassthroughCopy("./src/**/*.{jpg,png}");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
