const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        //additionalData: `@import "@/assets/styles/variables.scss";`, // Adjust the path to your variables file
      },
    },
  },
})
