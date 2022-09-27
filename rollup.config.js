import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: {
    "entry_main": 'src/main',
    "entry_1": 'src/entry_1',
  },
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: 'main-app.js',
    manualChunks(id, { getModuleInfo }) {
      // 这里可以按路由拆分
      // if (id.includes('src/router_a')) {
      //   return 'router_a';
      // }
      if (id.includes('src/router_b')) {
        return 'router_b';
      }
      // 打包依赖
      if (id.includes('node_modules')) {
        return 'vendor';
      }

      const reg = /(.*)\/src\/components\/(.*)/
      if (reg.test(id)) {
        const importersLen = getModuleInfo(id).importers.length;
        // 被多处引用
        if (importersLen > 1) {
          return 'common';
        }
      }
    }
  },

  plugins: [
    json(),
    nodeResolve(),
    commonjs()
  ]
}
