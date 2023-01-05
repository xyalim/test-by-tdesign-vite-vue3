import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 通过监听文件修改，自动重启 vite 服务。
import ViteRestart from 'vite-plugin-restart'

// 组件自动按需导入
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

// vue3等插件 hooks 自动引入
import AutoImport from 'unplugin-auto-import/vite';

// 使用 gzip 或者 brotli 来压缩资源
import viteCompression from 'vite-plugin-compression';

// 此插件支持在vue3中使用jsx/tsx语法
import vueJsx from '@vitejs/plugin-vue-jsx';

// 根据对应的文件结构来生成路由信息,不再需要手动的去配置路由
// https://blog.csdn.net/tjq11111/article/details/125178031
import Pages from 'vite-plugin-pages';

// 让vite在启动之初就对某些资源进行预打包，尽量避免后续的动态打包
// https://blog.csdn.net/m0_67265464/article/details/125345620
import PkgConfig from 'vite-plugin-package-config'


// 使用node内置模块时 需要使用此依赖
// npm install @types/node -D
import path from 'path';

// https://vitejs.dev/config/

const ViteRestartConfig = {
  restart: ['vite.config.[jt]s']
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
  
      // https://github.com/antfu/vite-plugin-restart/issues/11
      typeof ViteRestart === 'function' ? ViteRestart(ViteRestartConfig) : ViteRestart.default(ViteRestartConfig) ,
  
      AutoImport({
        imports: ['vue', 'vue-router', 'vuex', '@vueuse/head'],
        // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
        dts: 'auto-import.d.ts',
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
      Components({
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
  
      viteCompression(),
      vueJsx(),
  
      Pages({
        dirs: [
          // 申报用户（包含整个系统登录页和系统默认首页）
          { dir: 'src/views', baseRoute: '' },
        ],
        exclude: ['**/components/*.vue'],
        routeBlockLang: 'yml',
      }),
      typeof PkgConfig === 'function' ? PkgConfig() : PkgConfig.default() ,
    ],
  }
})
