import * as server from '../entries/pages/post/_slug_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/post/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/post/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.e72fdc7d.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.3723d49e.js","_app/immutable/chunks/Footer.3d27fe3a.js"];
export const stylesheets = ["_app/immutable/assets/5.cb943198.css","_app/immutable/assets/Footer.5efaf414.css"];
export const fonts = [];
