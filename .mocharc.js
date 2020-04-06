module.exports = {
  diff: true,
  extension: ['js'],
  package: './package.json',
  reporter: 'mochawesome',
  require: 'chai/register-expect',
  slow: 75,
  spec: './test/specs/*.js',
  timeout: 15000,
  ui: 'bdd',
  'watch-files': ['./test/specs/*.js'],
  'watch-ignore': ['']
};