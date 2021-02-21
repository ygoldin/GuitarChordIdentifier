'use strict';
const { defaults } = require('jest-config');
const { jsWithTs: tsjPreset} = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,

  verbose: true,
  globals: {
    __DEV__: true,
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/{!(index),}.{ts,tsx}'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
}