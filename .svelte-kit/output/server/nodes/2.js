import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.949cd960.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.3723d49e.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Footer.3d27fe3a.js"];
export const stylesheets = ["_app/immutable/assets/2.ea053178.css","_app/immutable/assets/Footer.5efaf414.css"];
export const fonts = [];
