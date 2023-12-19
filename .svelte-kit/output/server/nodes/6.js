import * as server from '../entries/pages/projecten/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projecten/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projecten/+page.server.js";
export const imports = ["_app/immutable/nodes/6.a33d18dc.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.3723d49e.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/6.d1d6faff.css"];
export const fonts = [];
