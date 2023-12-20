// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });

import { defineConfig } from 'sveltejs';
import adapterStatic from '@sveltejs/adapter-static';

export default defineConfig({
  adapter: adapterStatic(),
});