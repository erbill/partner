export default {
    title: "Bitti Gitti Partners",
    description: "An awesome docs built by Bitti Gitti",
  
    themeConfig: {
      logo: "/bitti-gitti-logo.svg",
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
      // Social Icons
      socialLinks: [
        
        { icon: "twitter", link: "https://twitter.com/bittigitti" },
        
        {
          icon: {
            svg: '<svg role="img" width="26.01" height="32" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg>',
          },
          link: "https://google.com",
        },
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
            { text: "E-Books for Business Owners", link: "/ebooks" },
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