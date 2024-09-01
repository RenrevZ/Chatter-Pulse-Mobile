export default defineAppConfig({
    theme: {
        dark: false,
        colors: {
          primary: '#ff0000'
        }
      },
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
    },
  })
  