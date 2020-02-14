import merge from "webpack-merge";

export default ({ config }) =>
  merge(config, {
    resolve: {
      extensions: [".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            { loader: "babel-loader" },
            {
              loader: "linaria/loader",
              options: {
                sourceMap: true,
                cacheDirectory: ".storybook/.linaria-cache",
              },
            },
          ],
        },
      ],
    },
  });
