// import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { prismjsPlugin } from "vite-plugin-prismjs";
import path from "path";
// import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    prismjsPlugin({
      languages: "all", // 语言
      plugins: [
        "line-numbers",
        "show-language",
        "copy-to-clipboard",
        "inline-color",
      ],
      theme: "default", // 主题
      css: true,
    }),
    // 暂时关闭，ts打包后的文件, 目前结构不对
    // dts({
    //   include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
    //   // beforeWriteFile: (filePath, content) => {
    //   //   return {
    //   //     filePath: filePath.replace('/src', ''),
    //   //     content
    //   //   }
    //   // }
    //   entryRoot: "src",
    //   outDir: "types", // 明确设置输出目录
    //   staticImport: true, // 使用静态导入
    //   insertTypesEntry: true, // 自动插入类型入口
    //   cleanVueFileName: true,
    //   copyDtsFiles: true,
    //   tsconfigPath: path.resolve(__dirname, "./tsconfig.app.json"),
    //   compilerOptions: {
    //     // 确保编译器选项与 tsconfig 一致
    //     skipLibCheck: true,
    //   }
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  build: {
    lib: {
      name: 'ElementPlusX',
      entry: path.resolve(__dirname, "./src/index.ts"),
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return `index.${format}.js`
        }
        return `${entryName}/index.${format}.js`
      }
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'element-plus'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        exports: 'named' // 确保有命名导出
      }
    },
    sourcemap: true, // 输出sourcemap便于调试
    // 减少文件大小
    minify: 'terser',
    // CSS 处理
    cssCodeSplit: true,
    // 确保只生成一个CSS文件
    emptyOutDir: true
  }
});
