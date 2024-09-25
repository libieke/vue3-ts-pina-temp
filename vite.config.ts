import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';

//element
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    AutoImport({
      //安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
      dts: "src/auto-import.d.ts",
      //element
      resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
    }),
    Components({
      //element
      resolvers: [ElementPlusResolver({ importStyle: 'sass' }), AntDesignVueResolver()],
      //默认存放位置
      //dts: "src/components.d.ts",
    }),
  ],
  build: {
    outDir: 'me-test',
    assetsDir: 'static',
    target: ['es2015']
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://xxx.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  }
})
