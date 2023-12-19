import * as server from '../entries/pages/kaart/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/kaart/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/kaart/+page.server.js";
export const imports = ["_app/immutable/nodes/3.3a97b683.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.3723d49e.js"];
export const stylesheets = ["_app/immutable/assets/3.267d22d6.css"];
export const fonts = [];
