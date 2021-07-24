module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['prismjs', { languages: ['javascript'] }],
    [
      'module-resolver',
      {
        alias: {
          '@hooks': './src/hooks',
          '@icons': './src/icons',
          '@layouts': './src/layouts',
          '@results': './src/results',
          '@components': './src/components',
        },
      },
    ],
  ],
};
