// vite.config.js
import { defineConfig } from "file:///C:/laragon/www/musica-igreja/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/laragon/www/musica-igreja/node_modules/laravel-vite-plugin/dist/index.js";
import react from "file:///C:/laragon/www/musica-igreja/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\laragon\\www\\musica-igreja";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    plugins: [
      laravel({
        input: [
          "resources/css/App.css",
          "resources/js/main.jsx"
        ],
        refresh: true
      }),
      react()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/variables.scss";'
          // opcional
        }
      }
    },
    build: {
      outDir: "public/build",
      manifest: "manifest.json",
      emptyOutDir: false,
      assetsDir: ".",
      // Isso evita que o Vite crie uma subpasta `.vite`
      cacheDir: "node_modules/.cache",
      cssCodeSplit: false,
      // isso evita mudar o nome original
      rollupOptions: {
        input: "resources/js/main.jsx",
        external: [
          "resources/css/App.css",
          "@radix-ui/react-select",
          "@radix-ui/react-popover",
          "@radix-ui/react-separator",
          "@radix-ui/react-label",
          "@radix-ui/react-tabs",
          "@radix-ui/react-checkbox",
          "@radix-ui/react-dropdown-menu",
          "@radix-ui/react-accordion",
          "@radix-ui/react-router-dom",
          "@radix-ui/react-jsx"
        ]
      }
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
      exclude: ["lucide-react"]
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "../../src")
        // Aponta para os arquivos css
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8000",
          changeOrigin: true,
          secure: false
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxtdXNpY2EtaWdyZWphXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxtdXNpY2EtaWdyZWphXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9sYXJhZ29uL3d3dy9tdXNpY2EtaWdyZWphL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIGxhcmF2ZWwoe1xuICAgICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgICAgICdyZXNvdXJjZXMvY3NzL0FwcC5jc3MnLFxuICAgICAgICAgICAgICAgICAgICAncmVzb3VyY2VzL2pzL0FwcC5qc3gnLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgXSxcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgc2Nzczoge1xuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCIuL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjsnLCAvLyBvcGNpb25hbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBidWlsZDoge1xuXG4gICAgICAgICAgICBvdXREaXI6IFwicHVibGljL2J1aWxkXCIsXG4gICAgICAgICAgICBtYW5pZmVzdDogJ21hbmlmZXN0Lmpzb24nLFxuICAgICAgICAgICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgICAgICAgICAgYXNzZXRzRGlyOiBcIi5cIiwgLy8gSXNzbyBldml0YSBxdWUgbyBWaXRlIGNyaWUgdW1hIHN1YnBhc3RhIGAudml0ZWBcbiAgICAgICAgICAgIGNhY2hlRGlyOiBcIm5vZGVfbW9kdWxlcy8uY2FjaGVcIixcbiAgICAgICAgICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsIC8vIGlzc28gZXZpdGEgbXVkYXIgbyBub21lIG9yaWdpbmFsXG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6ICdyZXNvdXJjZXMvanMvQXBwLmpzeCcsXG4gICAgICAgICAgICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9jc3MvQXBwLmNzcycsXG4gICAgICAgICAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1wb3BvdmVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1zZXBhcmF0b3InLFxuICAgICAgICAgICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC10YWJzJyxcbiAgICAgICAgICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1jaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudScsXG4gICAgICAgICAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1yb3V0ZXItZG9tJyxcbiAgICAgICAgICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1qc3gnXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGltaXplRGVwczoge1xuICAgICAgICAgICAgaW5jbHVkZTogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLi4vc3JjXCIpLCAvLyBBcG9udGEgcGFyYSBvcyBhcnF1aXZvcyBjc3NcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbJy5qcycsICcuanN4JywgJy50cycsICcudHN4J10sXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZlcjoge1xuICAgICAgICAgICAgcHJveHk6IHtcbiAgICAgICAgICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQThRLFNBQVMsb0JBQW9CO0FBQzNTLE9BQU8sYUFBYTtBQUNwQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3RDLFNBQU87QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNKLE9BQU87QUFBQSxVQUNIO0FBQUEsVUFDQTtBQUFBLFFBQ0o7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNiLENBQUM7QUFBQSxNQUNELE1BQU07QUFBQSxJQUNWO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDRCxxQkFBcUI7QUFBQSxRQUNqQixNQUFNO0FBQUEsVUFDRixnQkFBZ0I7QUFBQTtBQUFBLFFBQ3BCO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUVILFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQTtBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBO0FBQUEsTUFDZCxlQUFlO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNWLFNBQVMsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUM5QixTQUFTLENBQUMsY0FBYztBQUFBLElBQzVCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDSCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUE7QUFBQSxNQUM1QztBQUFBLE1BQ0EsWUFBWSxDQUFDLE9BQU8sUUFBUSxPQUFPLE1BQU07QUFBQSxJQUM3QztBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ0osT0FBTztBQUFBLFFBQ0gsUUFBUTtBQUFBLFVBQ0osUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsUUFBUTtBQUFBLFFBQ1o7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
