import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { F as Footer } from "../../../../chunks/Footer.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `main.svelte-1y458q6{padding-top:7rem}.content-container.svelte-1y458q6{width:60%;margin-left:20%;margin-bottom:10rem}.project-banner-img.svelte-1y458q6{width:100%;height:25rem;object-fit:cover;border-radius:.5rem;margin-bottom:.1rem}img{margin-top:1rem;margin-bottom:1rem;width:100%;border-radius:.5rem}video{margin-top:.5rem;margin-bottom:2rem;width:100%;border-radius:.5rem}blockquote{margin-top:2rem;margin-bottom:1rem;width:70%;margin-left:15%;font-size:1.4rem;line-height:2.4rem;text-align:center}a{color:#7FAEC5;text-decoration:none}blockquote:before{content:'"';font-size:5rem;position:absolute;color:#4ECD5D;margin-left:-2rem;margin-top:1rem}blockquote:after{content:'"';font-size:5rem;position:absolute;color:#4ECD5D;margin-left:.5rem;margin-top:1rem}span.svelte-1y458q6{color:#2B3F5A;font-weight:600;font-size:.9rem}h1.svelte-1y458q6{color:#7FAEC5;margin-bottom:.5rem}.project-html.svelte-1y458q6{color:#2B3F5A;font-size:.9rem;margin-bottom:.5rem;line-height:1.2rem;margin-bottom:2rem}@media only screen and (max-width: 1100px){.content-container.svelte-1y458q6{width:90%;margin-left:5%}.project-banner-img.svelte-1y458q6{width:100%;height:20rem}}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-9chyfo_START -->${$$result.title = `<title>SPATwater - ${escape(data.project.title)}</title>`, ""}<!-- HEAD_svelte-9chyfo_END -->`, ""} <main class="svelte-1y458q6">${data.project ? `${data.project.image && data.project.image.url ? `<div class="content-container svelte-1y458q6"><img class="project-banner-img svelte-1y458q6"${add_attribute("src", data.project.image.url, 0)}${add_attribute("alt", data.project.title, 0)}> <span class="svelte-1y458q6">${escape(data.project.categorie)}</span> <h1 class="svelte-1y458q6">${escape(data.project.title)}</h1> <div class="project-html svelte-1y458q6"><!-- HTML_TAG_START -->${data.project.content.html}<!-- HTML_TAG_END --></div> <a href="/#projecten" data-svelte-h="svelte-1uwixln"><p><i class="fa fa-arrow-left" aria-hidden="true"></i> Terug naar de kaart</p></a> </div>` : ``}` : `<p data-svelte-h="svelte-189l51e">Project not found.</p>`}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
