const { defaults } = require("@vue/cli-service/lib/options");

// module.exports = {
//   preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
// };

const config = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleFileExtensions: [
    "ts",
    "css",
    "scss",
    "png",
    "jpg",
    "ttf",
    "woff",
    "woff2",
    "js",
    "jsx",
    "json",
    "vue",
  ],
};

module.exports = config;
