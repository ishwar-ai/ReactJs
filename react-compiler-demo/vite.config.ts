import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { reactForgetPlugin } from '@react/ts-transform/vite'
// The above import fails because '@react/ts-transform/vite' does not exist or is not published.
// If you are trying to use React Forget, use the official plugin:
// import reactForget from '@reactforget/vite'

// Example (if you want to use React Forget):
// import reactForget from '@reactforget/vite'

export default defineConfig({
  plugins: [
    react()
  ],
})

