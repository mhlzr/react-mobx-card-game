module.exports = {
    "automock": false,
    "roots": [
        "<rootDir>/src"
    ],
    "setupFilesAfterEnv": ["<rootDir>/test-setup.ts"],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
}
