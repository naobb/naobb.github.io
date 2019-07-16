module.exports = {
  title: "blog",
  themeConfig: {
    description: "ここにはディスクリプションを入れます。",
    nav: [
      { text: "About", link: "/about/" } // ここはnav barのメニュー表示/aboutページは後ほど
    ]
  },
  plugins: [
    "@vuepress/blog"
  ]
};