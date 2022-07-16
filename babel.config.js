module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 从官网复制
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
