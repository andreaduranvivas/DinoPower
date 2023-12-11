module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.css$': 'jest-transform-css',
      '^.+\\.jsx?$': 'babel-jest',
    },

    "moduleNameMapper": {
      "^static/(.*)$": "./static/$1"
    },

    "moduleDirectories": ["node_modules", "src"],

    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
   };
