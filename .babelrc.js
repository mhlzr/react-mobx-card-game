module.exports = {
    "presets": [
        "@babel/typescript",
        "@babel/react"
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        "@babel/proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
        "babel-plugin-styled-components"
    ]
}
