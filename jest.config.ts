export default {
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
    ],
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy",
  },
  testMatch: ["<rootDir>/src/**/*.test.ts?(x)"],
};

