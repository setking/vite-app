import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import createVitePlugins from "./vite/index.js";

// https://vitejs.dev/config/
export default defineConfig(({mode, command}) =>{
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env

 return {
    base: VITE_APP_ENV === 'production' ? '/' : '/',
   plugins: [createVitePlugins(env, command === 'build')],
   resolve: {
     alias: {
       //设置路径
       '~': path.resolve(__dirname, './'),
       // 设置别名
       '@': path.resolve(__dirname, './src')
     }
   },
   extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
   //fix:error:stdin>:7356:1: warning: "@charset" must be the first rule in the file
   css: {
     postcss: {
       plugins: [
         {
           postcssPlugin: 'internal:charset-removal',
           AtRule: {
             charset: (atRule) => {
               if (atRule.name === 'charset') {
                 atRule.remove();
               }
             }
           }
         }
       ]
     }
   }
 }
})
