const { defineConfig } = require('@vue/cli-service')
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
  //path中的join方法
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  configureWebpack:{
    module:{
      rules:[ {
        test: /\.scss$/,
        use: ["sass-loader"]
      }]
    },
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
 
})
