module.exports = {
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      // eslint-disable-next-line no-undef
      components: path.resolve(__dirname, "src/components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
};
