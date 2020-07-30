module.exports = {
  presets: [
    'babel-preset-expo',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    // '@babel/preset-react',
  ],
};
