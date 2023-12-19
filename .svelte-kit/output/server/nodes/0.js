

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dc062ff7.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.3723d49e.js"];
export const stylesheets = ["_app/immutable/assets/0.171344c0.css"];
export const fonts = [];
