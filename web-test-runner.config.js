export default {
  coverageConfig: {
    report: true,
    reportDir: 'coverage',
    threshold: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
    exclude: [
      'test/fixtures/**',
      'node_modules/**',
      'src/rum.js', // no need to test rum.js, coming as external dependency from https://github.com/adobe/helix-rum-js
    ],
  },
  files: [
    'test/**/*.test.{html,js}',
  ],
};
