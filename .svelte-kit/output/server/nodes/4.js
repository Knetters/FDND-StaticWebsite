import * as server from '../entries/pages/kennisbank/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kennisbank/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/kennisbank/+page.server.js";
export const imports = ["_app/immutable/nodes/4.b2091ad9.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.3723d49e.js","_app/immutable/chunks/Footer.3d27fe3a.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/4.0ad71507.css","_app/immutable/assets/Footer.5efaf414.css"];
export const fonts = [];
