module.exports = {
  content: ["./src/**/*.{html,js}"],  theme: {
    extend: {
      colors: {
        'lightpink': '#FFFCF7',
        'buggyyellow': '#FFE338',
        'buggyfontdark': '#27292E',
        'buggyfontlight': '#585C65',
        'formborder': '#585C65',
        'buggyorange': '#EEA900',
      },
      boxShadow: {
        'workstepbox': '4px 4px 20px rgba(0, 0, 0, 0.1)',
        'servicebox': '-3px 3px 6px rgba(255, 238, 194, 0.27), 3px -3px 6px rgba(255, 238, 194, 0.19), -3px -3px 6px rgba(255, 255, 250, 0.9), 3px 3px 8px rgba(255, 238, 194, 0.24), inset 1px 1px 2px rgba(255, 255, 250, 0.3), inset -1px -1px 2px rgba(255, 238, 194, 0.53)',
        'contactbox': '0px 4px 20px rgba(0, 0, 0, 0.12);',
        'aboutusbox': '-5px 5px 10px rgba(230, 230, 230, 0.2), 5px -5px 10px rgba(230, 230, 230, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(230, 230, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(230, 230, 230, 0.5)',
      },
      backgroundImage: {
        'contactus': "url('./assets/img/contactus-bg.png')",
        'aboutus': "url('./assets/img/aboutus-bg.png')",
        'aboutusClients': "url('./assets/img/aboutus-clients-bg.png')",
        'ourOffering': "url('./assets/img/ourOffering-bg.png')",
        'homebutton': 'linear-gradient(111.32deg, #3D5374 -9.86%, #151F25 100%)'

      },
      borderImage: {
        'ourOffering': "url('./assets/img/our-offering-border.png')"
      }
    },
    screens: {
      'sm': {'min': '0px', 'max': '768px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      // 'md': {'min': '768px', 'max': '1023px'},
      // // => @media (min-width: 768px and max-width: 1023px) { ... }

      // 'lg': {'min': '768px', 'max': '1279px'},
      // // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // 'xl': {'min': '1280px', 'max': '1535px'},
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': {'min': '1536px'},
      // // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
