module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md",
    }],
    ['@semantic-release/exec', {
      prepareCmd: 'npm run build',
    }],
    "@semantic-release/npm",
    ['@semantic-release/git', {
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md', 'dist/aem.js'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }],
    ["@semantic-release/github", {}],
    ["@semantic-release/exec", {
      "publishCmd": "./publish.sh ${nextRelease.version} ${nextRelease.type}"
    }],
  ],
  branches: ['main'],
};
