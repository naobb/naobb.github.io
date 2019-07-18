module.exports = {
  title: "blog",
  themeConfig: {
    description: "ここにはディスクリプションを入れます。",
    nav: [
      { text: "About", link: "/about/" } // ここはnav barのメニュー表示/aboutページは後ほど
    ]
  },
  plugins: [
    "@vuepress/blog",
    // 'vue-spinner', 
    // {
    //   components: [
    //     {
    //       name: 'Spinner',
    //       path: '@vuepress/components/Spinner.vue'
    //     }
    //   ]
    //
    "vuejs-loading-plugin",
    "vue-typed-js"
  ]
};