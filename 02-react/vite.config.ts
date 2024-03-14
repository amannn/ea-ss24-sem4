import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import prettyCssModules from 'vite-plugin-pretty-css-modules';

export default defineConfig({
  plugins: [react(), prettyCssModules()]
});
