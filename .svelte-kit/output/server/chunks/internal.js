import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./ssr.js";
import "./paths.js";
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="../assets/SPAT_Logo_zondertekst.png" />\n    <meta name="viewport" content="width=device-width" />\n    <meta name="description" content="Spatwater" />\n\n    <title>SPATwater</title>\n\n    ' + head + '\n\n    <!--=============== REMIXICONS ===============-->\n    <link\n      href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"\n      rel="stylesheet"\n    />\n    <link\n      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"\n      rel="stylesheet"\n    />\n\n    <!--=============== GOOGLE ICONS ===============-->\n    <link\n      rel="stylesheet"\n      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"\n    />\n\n    <!--=============== SWIPER CSS ===============-->\n    <link rel="stylesheet" href="/assets/swiper-bundle.min.css" />\n\n    <!--=============== SWIPER JS ===============-->\n    <script src="/assets/swiper-bundle.min.js"><\/script>\n\n    <!--=============== LEAFLET JS ===============-->\n    <link\n      rel="stylesheet"\n      href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"\n      integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="\n      crossorigin=""\n    />\n    <script\n      src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"\n      integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="\n      crossorigin=""\n    ><\/script>\n  </head>\n\n  <body data-sveltekit-preload-data="hover">\n    <div style="display: contents">' + body + '</div>\n  </body>\n</html>\n\n<style>\n  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap");\n\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    scroll-behavior: smooth;\n    font-family: "Open sans", sans-serif;\n  }\n\n  :root {\n    --spat: #7faec5;\n    --lg-bg: #fafafa;\n    --green: #4ecd5d;\n    --darkblue: #384b61;\n  }\n\n  @media screen and (prefers-contrast: more) {\n    :root {\n      --spat: #384b61;\n      --green: #384b61;\n    }\n  }\n\n  p {\n    margin-bottom: 1rem;\n    color: var(--darkblue);\n    font-size: 1rem;\n  }\n\n  html {\n    scroll-behavior: smooth;\n  }\n\n  body {\n    font-family: "Poppins", serif;\n  }\n\n  main {\n    overflow-x: hidden;\n    overflow-y: hidden;\n  }\n\n  .button {\n    display: inline-block;\n    background-color: var(--green);\n    color: white;\n    padding: 0.5rem 1rem;\n    border-radius: 5px;\n    font-weight: var(--font-semi-bold);\n    transition: 0.3s;\n    text-decoration: none;\n    z-index: 7;\n\n    &.is-high-contrast {\n      background-color: var(--darkblue);\n    }\n  }\n\n  .button:hover {\n    background-color: var(--darkblue);\n  }\n\n  .leaflet-control {\n    display: none !important;\n  }\n\n  @keyframes sparkle {\n    0% {\n      transform: translateY(0) scale(1);\n      opacity: 1;\n    }\n    100% {\n      transform: translateY(100vh) scale(1.5);\n      opacity: 0;\n    }\n  }\n\n  .sparkle {\n    position: absolute;\n    width: 1rem;\n    height: 1rem;\n    background: radial-gradient(circle, #fbf4c3e6 20%, transparent 80%);\n    animation: sparkle 10s ease-in-out infinite;\n    pointer-events: none;\n  }\n\n  .sparkle::after {\n    position: absolute;\n    width: 0.5rem;\n    height: 0.5rem;\n    background: radial-gradient(circle, #8ea2e3e6 20%, transparent 80%);\n    animation: sparkle 10s ease-in-out infinite;\n    pointer-events: none;\n  }\n</style>\n',
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "p2qgpl"
};
function get_hooks() {
  return {};
}
export {
  set_public_env as a,
  set_building as b,
  get_hooks as g,
  options as o,
  public_env as p,
  set_private_env as s
};
