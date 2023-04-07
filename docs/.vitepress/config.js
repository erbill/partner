export default {
  title: "Bitti Gitti Partners",
  description: "An awesome docs built by Bitti Gitti",

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Partners",
    // Navbar Link
    nav: [
      { text: "About", link: "/about" },
      { text: "Guide", link: "/guide" },
      { text: "Alternative Content", link: "/configs" },
      {
        // Dropdown Menu
        text: "Useful Links",
        items: [
          { text: "Spotify", link: "/item-1" },
          { text: "Amazon E-Books", link: "/item-2" },
          { text: "Vimeo", link: "/item-3" },
        ],
      },
    ],
    head: [
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ],
    
    // Social Icons
    socialLinks: [
      { icon: "dropbox", link: "github.com/evavic44" },
      { icon: "twitter", link: "https://twitter.com/bittigitti" },
      { icon: "discord", link: "..." },
      
    ],
    // Sidebar
    sidebar: [
      {
        text: "Getting Started",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Setting your Online Store", link: "/getting-started" },
        ],
      },
      {
        text: "Products",
        collapsible: true,
        items: [
          { text: "the Wooden Sound System", link: "/tws" },
          { text: "the Wooden Kaleidoscope", link: "/getting-started" },
        ],
      },
      {
        text: "Marketing Ideas",
        collapsible: true,
        items: [
          { text: "Personification", link: "/introduction" },
          { text: "B2B Sales", link: "/getting-started" },
          { text: "Workshops", link: "/getting-started" },
          { text: "Drop Strategy", link: "/getting-started" },
        ],
      },
      {
        text: "Useful Links",
        collapsible: true,
        items: [
          { text: "Bitti Gitti on Spotify", link: "/introduction" },
          { text: "E-Books on Amazon", link: "/getting-started" },
          { text: "Request a render", link: "/getting-started" },
          { text: "Pitch us your ideas!", link: "/getting-started" },
        ],
      },
    ],
    footer: {
      message: "www.bitti-gitti.com",
      copyright: "© 2023-Bitti Gitti",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};