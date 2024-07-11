import { SitemapStream } from 'sitemap';
import Pages from 'vite-plugin-pages';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

let links = [];

export default {
    title: "Bitti Gitti Partners",
    description: "An awesome docs built by Bitti Gitti",
    plugins: [
      Pages()
    ],
    themeConfig: {
      logo: "/bitti-gitti-logo.svg",
      siteTitle: "Partners",
      // Navbar Link
      nav: [
        { text: "About", link: "/about" },
        { text: "Guide", link: "/guide" },
        { text: "Fast Setup", link: "/getting-started" },
        {
          // Dropdown Menu
          text: "Useful Links",
          items: [
            { text: "Spotify", link: "/music" },
            { text: "Amazon E-Books", link: "/ebooks" },
            { text: "Vimeo", link: "https://vimeo.com/bitti" },
            { text: "Blog", link: "https://blog.bitti-gitti.com" },
          ],
        },
      ],
      // Social Icons
      socialLinks: [
        
        { icon: "twitter", link: "https://twitter.com/bittigitti" },
        { icon: "instagram", link: "https://instagram.com/bittigitti" },
        
        {
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16"> <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/> <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/> </svg>',
          },
          link: "https://blog.bitti-gitti.com",
        },
      ],
      // Sidebar
      sidebar: [
        {
          text: "Getting Started",
          collapsible: true,
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Setting up your Online Store", link: "/getting-started" },
          ],
        },
        {
          text: "TWS",
          collapsible: true,
          items: [
            { text: "the Wooden Sound System", link: "/tws" },
            { text: "3D Renders and Visuals", link: "/renders" },
            { text: "Color alternatives", link: "/tws-color"},
            { text: "Limited Editions", link: "/tws-limited"},
          ],
        },
        {
          text: "Marketing Ideas",
          collapsible: true,
          items: [
            { text: "Personification", link: "/personas" },
            { text: "Customization", link: "/customizations" },
            { text: "B2B Sales", link: "/b2b-events" },
            { text: "Workshops", link: "/workshops" },
            { text: "Drop Strategy", link: "/dropstrategy" },
            { text: "E-Mailing", link: "/emailing" },
            { text: "Major Events & Holidays", link: "/majorevents" },
          ],
        },
        {
          text: "Useful Links",
          collapsible: true,
          items: [
            { text: "Bitti Gitti on Spotify", link: "/music" },
            { text: "E-Books for Business Owners", link: "/ebooks" },
            { text: "Blog", link: "https://blog.bitti-gitti.com" },
            { text: "Social Shares", link: "https://shares.bitti-gitti.com" },
            { text: "Strategy AI", link: "https://twsbot.bitti-gitti.com" },
            { text: "FREE Web Apps", link: "/sites"},
          ],
        },

        {
          text: "Other Products",
          collapsible: true,
          items: [
            { text: "Notebook Making Kit", link: "/notebooks" },
            { text: "the Musical Wheel", link: "/musicalwheel" },
            { text: "the Wooden Kaleidoscope", link: "/kaleidoscope" },
            { text: "the Wooden Pen Holder", link: "/penholder" },
            { text: "DIY Flower and Pot KIT 🌸", link: "/flower" },
            { text: "GitHub Graph on TWS 🟢", link: "/github" },
            { text: "Password Book 🔑", link: "/passbook" },
            { text: "Ceramic Art Objects 🐦", link: "/vetjale" },
          ],
        },
      ],
      footer: {
        message: "Made with curiosity and love",
        copyright: "© 2024-Bitti Gitti",
      },
      markdown: {
        theme: "material-palenight",
        lineNumbers: true,
      },
    },
    transformHtml: (_, id, { pageData }) => {
      if (!/[\\/]404\.html$/.test(id)) {
        links.push({
          // you might need to change this if not using clean urls mode
          url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
          lastmod: pageData.lastUpdated
        });
      }
    },
    buildEnd: ({ outDir }) => {
      const sitemap = new SitemapStream({ hostname: 'https://partners.bitti-gitti.com' }) // Replace with your website URL
      const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
      sitemap.pipe(writeStream)
      links.forEach((link) => sitemap.write(link))
      sitemap.end()
    }

  };