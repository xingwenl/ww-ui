import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from "unplugin-vue-define-options/vite";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "ww-ui": "/packages"
    }
  },
  plugins: [
    dts({
      // entryRoot: './packages',
      outDir: "lib",
      insertTypesEntry: true,
      staticImport: true,
      tsconfigPath: "./tsconfig.json",
    }),
    vue(),
    vueJsx(),
    DefineOptions()
  ],
  build: {
    outDir: "es",
    minify: false,
    // terserOptions: { // 打包代码时移除console、debugger、注释
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true
    //   },
    //   format: {
    //     comments: false,
    //   }
    // },
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue", "element-plus"],
      input: ["packages/ww/index.ts"],
      preserveEntrySignatures: "strict",
      output: [
        {
          globals: {
            vue: "Vue",
          },
          dir: "lib",
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: 'packages',
          exports: "named",
        },
        {
          globals: {
            vue: "Vue",
          },
          dir: "lib",
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: 'packages',
          exports: "named",
        },
      ],
    },
    lib: {
      entry: "./packages/ww/index.ts",
      name: "ww",
      fileName: (fomart) => `ww-ui.${fomart}.js`,
    //   // formats: ["es", "umd", "cjs"],
    },
  },
});
