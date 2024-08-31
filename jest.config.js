export default {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    transform: {
        "^,+\\.jsx?$": "babel-jest",
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};