import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 通过监听文件修改，自动重启 vite 服务。
import ViteRestart from 'vite-plugin-restart'
// https://vitejs.dev/config/

const ViteRestartConfig = {
  restart: ['vite.config.[jt]s']
}
console.log(ViteRestart)
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/antfu/vite-plugin-restart/issues/11
    typeof ViteRestart === 'function' ? ViteRestart(ViteRestartConfig) : ViteRestart.default(ViteRestartConfig) 
  ],
})
