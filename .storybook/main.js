module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)", // 对应要显示的组件的位置
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
  ],
  //使用scss,使用前记得安装对应的loader
  // webpackFinal: async (config, { configType }) => {
  // 	config.module.rules.push({
  // 		test: /\.scss$/,
  // 		use: ['style-loader', 'css-loader', 'sass-loader'],
  // 		include: path.resolve(__dirname, '../'),
  // 	});

  // 	// Return the altered config
  // 	return config;
  // },
};
