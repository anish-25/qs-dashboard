import type { StorybookConfig } from "@storybook/nextjs"
import * as path from 'path'
import { Configuration } from 'webpack'

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
          test: /\.css$/,
          sideEffects: true,
          use: [
            require.resolve("style-loader"),
            {
              loader: require.resolve("css-loader"),
              options: {

                importLoaders: 1,
              },
            }, {
              loader: require.resolve("postcss-loader"),
              options: {
                implementation: require.resolve("postcss"),
              },
            },
          ],
        },],
      }
    }),

  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config: Configuration) => {
    const { module, resolve } = config ?? {}
    if (module?.rules && resolve?.alias) {
      resolve.alias = {
        ...resolve.alias,
        '@': [
          path.resolve(__dirname, '../src/'),
          path.resolve(__dirname, '../')
        ]
      }
      resolve.roots = [
        path.resolve(__dirname, '../public'),
        'node_modules'
      ]
    }
    return config
  }
}
export default config