import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
})
=======
  server: {
    port: 3000,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3001", // Đổi cổng nếu cần
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
  // server: {
  // },
});
>>>>>>> 7ece123559cd857a473924660d2575195294f1d5
