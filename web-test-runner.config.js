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
    ],
  },
  files: [
    'test/rum/*.test.{html,js}',
  ],
};
