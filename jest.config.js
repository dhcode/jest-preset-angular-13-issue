module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  transformIgnorePatterns: ['node_modules/(?!(date-fns|ngx-pipes|.*\\.mjs$))'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
};
