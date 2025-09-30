// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",            // your entry
      name: "HeyGenPlayerBundle",       // must be unique global name
      fileName: (format) => `heygen-player.${format}.js`,
      formats: ["umd"],                 // Wix requires UMD
    },
    rollupOptions: {
      external: ["livekit-client"],     // don’t bundle LiveKit, expect global
      output: {
        globals: {
          "livekit-client": "LivekitClient"
        }
      }
    }
  }
});
