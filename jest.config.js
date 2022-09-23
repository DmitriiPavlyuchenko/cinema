module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy",
  },
  // transform: {
  //   ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
  //     "jest-transform-stub",
  // },
};
