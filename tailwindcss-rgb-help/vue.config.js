module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
  },
};
