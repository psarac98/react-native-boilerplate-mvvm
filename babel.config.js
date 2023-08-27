module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/stacks': './src/routes/stacks',
          '~/routes': './src/routes',
          '~/screens': './src/screens',
        },
      },
    ],
  ],
};