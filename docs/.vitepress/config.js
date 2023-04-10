export default {
  title: "Bitti Gitti Partners",
  description: "An awesome docs built by Bitti Gitti",

  themeConfig: {
    logo: "/bitti-gitti-logo.svg",
    siteTitle: "Partners",
    // Navbar Link
    nav: [
      { text: "Getting Started", link: "/guide" },
      { text: "About", link: "/about" },
      { text: "Strategy AI", link: "https://twsbot.bitti-gitti.com" },
      {
        // Dropdown Menu
        text: "Useful Links",
        items: [
          { text: "Spotify", link: "https://open.spotify.com/artist/6pHu6yn12MFevc5KOj3RZq?si=ORmmYi3ES2Csi74ovxD7qA" },
          { text: "Amazon E-Books", link: "https://kdp.amazon.com/amazon-dp-action/us/dualbookshelf.marketplacelink/B0BYRDRKQY" },
          { text: "Vimeo", link: "https://vimeo.com/bitti" },
        ],
      },
    ],
   
    
    // Social Icons
    socialLinks: [
     
      { icon: "twitter", link: "https://twitter.com/bittigitti" },
      { icon: "instagram", link: "https://www.instagram.com/bittigitti/" },
    
      
    ],
    // Sidebar
    sidebar: [
      {
        text: "Getting Started",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Setting your Online Store", link: "/guide" },
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
          { text: "Persona Specific", link: "/personas" },
          { text: "B2B Sales", link: "/getting-started" },
          { text: "Workshops", link: "/workshops" },
          { text: "Drop Strategy", link: "/dropstrategy" },
        ],
      },
      {
        text: "Useful Links",
        collapsible: true,
        items: [
          { text: "Bitti Gitti on Spotify", link: "https://open.spotify.com/artist/6pHu6yn12MFevc5KOj3RZq?si=ORmmYi3ES2Csi74ovxD7qA" },
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