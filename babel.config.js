module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/stacks': './src/navigation/stacks',
          '~/navigation': './src/navigation',
          '~/screens': './src/screens',
        },
      },
    ],
  ],
};
