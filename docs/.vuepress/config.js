module.exports = {
  title: 'HankGuo93 Blog',
  description: 'Coding Rookie Forever',
  head: [
    ['link', { rel: 'icon', href: '/astronaut.ico' }],
  ],
  base: '/vuepress-blog/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 1,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '數據結構與演算法', link: '/Sidebar/' },
      {
        text: 'About',
        items: [
          { text: 'GitHub', link: 'https://github.com/HankGuo93' },
          { text: 'Linkedin', link: 'https://www.linkedin.com/in/hank-guo-6985551bb/' },
          { text: 'WordPress', link: 'https://hankguo93.wordpress.com/' },
        ]
      }
    ],
    sidebar: {
      // docs文件夾下面的Algorithm文件夾 文檔中md文件 書寫的位置(命名隨意)
      '/Sidebar/': [
        '/Sidebar/', // Algorithm文件夾的README.md 不是下拉框形式
        {
          title: 'Algorithm',
          children: [
            '/Sidebar/Algorithm/PostA/Data', // 以docs為根目錄來查找文件
          ]
        },
        {
          title: 'DataStructure',
          children: [
            '/Sidebar/DataStructure/PostB/Data'
          ]
        }
      ],
    }
  }
};