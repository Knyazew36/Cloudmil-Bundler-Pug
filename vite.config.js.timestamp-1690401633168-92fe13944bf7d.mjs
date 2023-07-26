// vite.config.js
import path, { resolve } from "node:path";
import url from "node:url";
import { defineConfig } from "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/node_modules/vite/dist/node/index.js";
import viteBabel from "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/node_modules/vite-plugin-babel/dist/index.mjs";
import viteMultipage from "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/node_modules/vite-plugin-multipage/index.js";
import vitePug from "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/node_modules/vite-plugin-pug-transformer/src/index.js";
import viteEslint from "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteStylelint from "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/node_modules/vite-plugin-stylelint/dist/index.mjs";
import viteSassGlob from "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/node_modules/vite-plugin-sass-glob-import/dist/index.mjs";
import viteImagemin from "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/node_modules/vite-plugin-imagemin/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\\u041F\u0420\u041E\u0415\u041A\u0422\u042B\\Cloudmil-Bundler-Pug";
var __vite_injected_original_import_meta_url = "file:///D:/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%D0%AB/Cloudmil-Bundler-Pug/vite.config.js";
var root = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "src");
var outDir = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "dist");
var vite_config_default = defineConfig({
  root,
  base: "./",
  clearScreen: false,
  build: {
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: "1024",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          } else if (extType === "css") {
            extType = "styles";
          }
          return `${extType}/[name][extname]`;
        },
        chunkFileNames: "scripts/scripts.js"
      }
    }
  },
  plugins: [
    viteBabel({
      presets: ["@babel/preset-env"]
    }),
    viteMultipage({
      mimeCheck: true,
      open: "/",
      pageDir: "pages",
      purgeDir: "pages",
      removePageDirs: true,
      rootPage: "index.html"
    }),
    vitePug({
      pugOptions: {
        pretty: true,
        basedir: path.resolve(__vite_injected_original_dirname, "src/blocks")
      }
    }),
    viteEslint({
      failOnError: false
    }),
    viteStylelint(),
    viteSassGlob(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 75
      },
      pngquant: {
        quality: [0.7, 0.7],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/images")],
      symbolId: "[name]",
      inject: "body-last",
      customDomId: "__svg__icons__dom__"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTA0MUZcdTA0MjBcdTA0MUVcdTA0MTVcdTA0MUFcdTA0MjJcdTA0MkJcXFxcQ2xvdWRtaWwtQnVuZGxlci1QdWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1MDQxRlx1MDQyMFx1MDQxRVx1MDQxNVx1MDQxQVx1MDQyMlx1MDQyQlxcXFxDbG91ZG1pbC1CdW5kbGVyLVB1Z1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUQwJTlGJUQwJUEwJUQwJTlFJUQwJTk1JUQwJTlBJUQwJUEyJUQwJUFCL0Nsb3VkbWlsLUJ1bmRsZXItUHVnL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB1cmwgZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZpdGVCYWJlbCBmcm9tICd2aXRlLXBsdWdpbi1iYWJlbCdcbmltcG9ydCB2aXRlTXVsdGlwYWdlIGZyb20gJ3ZpdGUtcGx1Z2luLW11bHRpcGFnZSdcbmltcG9ydCB2aXRlUHVnIGZyb20gJ3ZpdGUtcGx1Z2luLXB1Zy10cmFuc2Zvcm1lcidcbmltcG9ydCB2aXRlRXNsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCdcbmltcG9ydCB2aXRlU3R5bGVsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLXN0eWxlbGludCdcbmltcG9ydCB2aXRlU2Fzc0dsb2IgZnJvbSAndml0ZS1wbHVnaW4tc2Fzcy1nbG9iLWltcG9ydCdcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2VtaW4nXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcblxuXG5jb25zdCByb290ID0gcmVzb2x2ZShwYXRoLmRpcm5hbWUodXJsLmZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICdzcmMnKVxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShwYXRoLmRpcm5hbWUodXJsLmZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICdkaXN0JylcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdCxcbiAgYmFzZTogJy4vJyxcbiAgY2xlYXJTY3JlZW46IGZhbHNlLFxuICBidWlsZDoge1xuICAgIG91dERpcixcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6ICcxMDI0JyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBsZXQgZXh0VHlwZSA9IGFzc2V0SW5mby5uYW1lLnNwbGl0KCcuJylbMV1cbiAgICAgICAgICBpZiAoL3BuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljby9pLnRlc3QoZXh0VHlwZSkpIHtcbiAgICAgICAgICAgIGV4dFR5cGUgPSAnaW1hZ2VzJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXh0VHlwZSA9PT0gJ2NzcycpIHtcbiAgICAgICAgICAgIGV4dFR5cGUgPSAnc3R5bGVzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7ZXh0VHlwZX0vW25hbWVdW2V4dG5hbWVdYFxuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ3NjcmlwdHMvc2NyaXB0cy5qcydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2aXRlQmFiZWwoe1xuICAgICAgcHJlc2V0czogWydAYmFiZWwvcHJlc2V0LWVudiddXG4gICAgfSksXG4gICAgdml0ZU11bHRpcGFnZSh7XG4gICAgICBtaW1lQ2hlY2s6IHRydWUsXG4gICAgICBvcGVuOiAnLycsXG4gICAgICBwYWdlRGlyOiAncGFnZXMnLFxuICAgICAgcHVyZ2VEaXI6ICdwYWdlcycsXG4gICAgICByZW1vdmVQYWdlRGlyczogdHJ1ZSxcbiAgICAgIHJvb3RQYWdlOiAnaW5kZXguaHRtbCdcbiAgICB9KSxcbiAgICB2aXRlUHVnKHtcbiAgICAgIHB1Z09wdGlvbnM6IHtcbiAgICAgICAgcHJldHR5OiB0cnVlLFxuICAgICAgICBiYXNlZGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2Jsb2NrcycpXG4gICAgICB9XG4gICAgfSksXG4gICAgdml0ZUVzbGludCh7XG4gICAgICBmYWlsT25FcnJvcjogZmFsc2VcbiAgICB9KSxcbiAgICB2aXRlU3R5bGVsaW50KCksXG4gICAgdml0ZVNhc3NHbG9iKCksXG4gICAgdml0ZUltYWdlbWluKHtcbiAgICAgIGdpZnNpY2xlOiB7XG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxuICAgICAgICBpbnRlcmxhY2VkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG9wdGlwbmc6IHtcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDdcbiAgICAgIH0sXG4gICAgICBtb3pqcGVnOiB7XG4gICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICB9LFxuICAgICAgcG5ncXVhbnQ6IHtcbiAgICAgICAgcXVhbGl0eTogWzAuNywgMC43XSxcbiAgICAgICAgc3BlZWQ6IDRcbiAgICAgIH0sXG4gICAgICBzdmdvOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlVmlld0JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVFbXB0eUF0dHJzJyxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICBpY29uRGlyczogW3Jlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9pbWFnZXMnKV0sXG4gICAgICBzeW1ib2xJZDogJ1tuYW1lXScsXG4gICAgICBpbmplY3Q6ICdib2R5LWxhc3QnLFxuICAgICAgY3VzdG9tRG9tSWQ6ICdfX3N2Z19faWNvbnNfX2RvbV9fJ1xuICAgIH0pXG4gIF1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdULE9BQU8sUUFBUSxlQUFlO0FBQ3RWLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sa0JBQWtCO0FBQ3pCLFNBQVMsNEJBQTRCO0FBVnJDLElBQU0sbUNBQW1DO0FBQWtJLElBQU0sMkNBQTJDO0FBYTVOLElBQU0sT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLGNBQWMsd0NBQWUsQ0FBQyxHQUFHLEtBQUs7QUFDNUUsSUFBTSxTQUFTLFFBQVEsS0FBSyxRQUFRLElBQUksY0FBYyx3Q0FBZSxDQUFDLEdBQUcsTUFBTTtBQUUvRSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLEVBQ2IsT0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBLGFBQWE7QUFBQSxJQUNiLHVCQUF1QjtBQUFBLElBQ3ZCLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxVQUFVLFVBQVUsS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pDLGNBQUksa0NBQWtDLEtBQUssT0FBTyxHQUFHO0FBQ25ELHNCQUFVO0FBQUEsVUFDWixXQUFXLFlBQVksT0FBTztBQUM1QixzQkFBVTtBQUFBLFVBQ1o7QUFDQSxpQkFBTyxHQUFHO0FBQUEsUUFDWjtBQUFBLFFBQ0EsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLE1BQ1IsU0FBUyxDQUFDLG1CQUFtQjtBQUFBLElBQy9CLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLGdCQUFnQjtBQUFBLE1BQ2hCLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxNQUNOLFlBQVk7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFNBQVMsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUMvQztBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLElBQ2IsYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ1IsbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsUUFBUSxRQUFRLElBQUksR0FBRyxZQUFZLENBQUM7QUFBQSxNQUMvQyxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
