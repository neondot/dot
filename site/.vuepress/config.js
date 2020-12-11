module.exports = {
  base: '/dot/',
  dest: 'docs',
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      ['/', 'Homepage'],
      {
        title: 'Classes',
        path: '/classes/DotApp',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/classes/DotApp', 'DotApp']
        ]
      },
    ]
  },
}