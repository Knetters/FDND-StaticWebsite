import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "proj4";
const MapMenu_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".map-menu.svelte-1x6mqdw.svelte-1x6mqdw{background-color:#fdfdfd;height:5rem;width:90%;margin-left:5%;margin-top:6.5rem;padding:.5rem 1rem;border-radius:1rem;position:relative;z-index:9999;display:flex;box-shadow:0px 0px 10px 5px #9d9d9d4b;transition:.2s}.text-block.svelte-1x6mqdw.svelte-1x6mqdw{width:50%;position:relative}h1.svelte-1x6mqdw.svelte-1x6mqdw{padding:0rem;margin-top:-.2rem;font-size:1.5rem;color:var(--spat)}.text-block.svelte-1x6mqdw p.svelte-1x6mqdw{position:absolute;bottom:0;margin:0;transition:.2s}.action-block.svelte-1x6mqdw.svelte-1x6mqdw{width:50%;position:relative;text-align:right}.action-block.svelte-1x6mqdw ul.svelte-1x6mqdw{list-style:none;padding:0;margin:0;position:absolute;bottom:0;right:0}.action-block.svelte-1x6mqdw ul li.svelte-1x6mqdw{float:right;background-color:#f2f2f2;margin-left:1rem;padding:.2rem .6rem;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;border-radius:.5rem}.action-block.svelte-1x6mqdw ul li.svelte-1x6mqdw:hover{background-color:#4ecd5d89}.active.svelte-1x6mqdw.svelte-1x6mqdw{background-color:#4ECD5D !important;color:#fff}.menu-icon.svelte-1x6mqdw.svelte-1x6mqdw{cursor:pointer;color:#2B3F5A}.menu-icon.svelte-1x6mqdw.svelte-1x6mqdw:hover{color:#767676}@media only screen and (max-width: 900px){.map-menu.svelte-1x6mqdw.svelte-1x6mqdw{flex-direction:column}.action-block.svelte-1x6mqdw.svelte-1x6mqdw{width:100%;margin-top:2rem}.text-block.svelte-1x6mqdw.svelte-1x6mqdw{width:100%}.menu-icon.svelte-1x6mqdw.svelte-1x6mqdw,.text-block.svelte-1x6mqdw p.svelte-1x6mqdw{display:none}}",
  map: null
};
const MapMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="map-menu" class="map-menu svelte-1x6mqdw" data-svelte-h="svelte-1h69908"><div class="text-block svelte-1x6mqdw"><h1 class="svelte-1x6mqdw">Kansenkaart</h1> <p id="menu-text" class="svelte-1x6mqdw">Kleine regel tekst met uitleg over de kaart</p></div> <div class="action-block svelte-1x6mqdw"><p id="min" class="menu-icon svelte-1x6mqdw">Verbergen</p> <p id="plus" class="menu-icon svelte-1x6mqdw">Opties</p> <ul id="menu-list" class="svelte-1x6mqdw"><li data-location="utrecht" class="svelte-1x6mqdw">Utrecht</li> <li data-location="rotterdam" class="svelte-1x6mqdw">Rotterdam</li> <li data-location="den-haag" class="svelte-1x6mqdw">Den-Haag</li> <li class="active svelte-1x6mqdw" data-location="amsterdam">Amsterdam</li></ul></div> </div>`;
});
const MapAside_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "aside.svelte-121r8ki.svelte-121r8ki{background-color:#fdfdfdb3;height:70vh;max-width:20rem;margin-left:5%;margin-top:1.5rem;padding:.5rem 1rem;border-radius:1rem;position:relative;z-index:9999;display:flex;box-shadow:0px 0px 10px 5px #9d9d9d4b;transition:.2s;display:none}.inner-content.svelte-121r8ki.svelte-121r8ki{position:relative;width:100%;height:70vh}.hide.svelte-121r8ki.svelte-121r8ki{position:absolute;right:0;bottom:0;padding-bottom:1rem;cursor:pointer;color:#2B3F5A}.hide.svelte-121r8ki.svelte-121r8ki:hover{color:#767676}h2.svelte-121r8ki.svelte-121r8ki{color:var(--spat)}.no-margin-bot.svelte-121r8ki.svelte-121r8ki{margin-bottom:0;margin-top:1rem}.extra-info-container.svelte-121r8ki.svelte-121r8ki{width:100%;display:flex;padding-top:.5rem;border-top:#8795aa 1px solid}.extra-info-container.svelte-121r8ki p.svelte-121r8ki{margin:0;padding:0}.extra-info-titles.svelte-121r8ki.svelte-121r8ki{width:50%}.extra-info-values.svelte-121r8ki.svelte-121r8ki{width:50%;text-align:right}",
  map: null
};
const MapAside = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<aside id="infoPanel" class="svelte-121r8ki" data-svelte-h="svelte-q19m38"><div id="infoContent"><div class="inner-content svelte-121r8ki"><span class="hide svelte-121r8ki" id="hide">Verbergen</span> <h2 id="infoTitle" class="svelte-121r8ki">[naam]</h2> <p class="no-margin-bot svelte-121r8ki">Extra informatie</p> <div class="extra-info-container svelte-121r8ki"><div class="extra-info-titles svelte-121r8ki"><p class="svelte-121r8ki">K-Waarde:</p> <p class="svelte-121r8ki">50-75:</p> <p class="svelte-121r8ki">&lt;25cm:</p> <p class="svelte-121r8ki">25-50:</p> <p class="svelte-121r8ki">75-100:</p> <p class="svelte-121r8ki">100-150:</p> <p class="svelte-121r8ki">&gt;150cm:</p> <p class="svelte-121r8ki">Geometry:</p></div> <div class="extra-info-values svelte-121r8ki"><p id="value0" class="svelte-121r8ki">[waarde]</p> <p id="value1" class="svelte-121r8ki">[waarde]</p> <p id="value2" class="svelte-121r8ki">[waarde]</p> <p id="value3" class="svelte-121r8ki">[waarde]</p> <p id="value4" class="svelte-121r8ki">[waarde]</p> <p id="value5" class="svelte-121r8ki">[waarde]</p> <p id="value6" class="svelte-121r8ki">[waarde]</p> <p id="value7" class="svelte-121r8ki">[waarde]</p></div></div></div></div> </aside>`;
});
const Kansenkaart_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-4720ol{height:100vh;width:100vw;position:absolute}",
  map: null
};
const Kansenkaart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="map" class="svelte-4720ol">${validate_component(MapMenu, "MapMenu").$$render($$result, {}, {}, {})} ${validate_component(MapAside, "MapAside").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-qencyq_START -->${$$result.title = `<title>SPATwater - Kansenkaart</title>`, ""}<!-- HEAD_svelte-qencyq_END -->`, ""} <main>${validate_component(Kansenkaart, "Kansenkaart").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
