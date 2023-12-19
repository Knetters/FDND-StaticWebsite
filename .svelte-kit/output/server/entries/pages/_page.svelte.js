import { c as create_ssr_component, v as validate_component, b as each, e as escape, a as add_attribute } from "../../chunks/ssr.js";
import { F as Footer } from "../../chunks/Footer.js";
const Home_svelte_svelte_type_style_lang = "";
const css$d = {
  code: "main.svelte-1z09e50.svelte-1z09e50{overflow-x:hidden;overflow-y:hidden}.home-title.svelte-1z09e50.svelte-1z09e50{color:var(--darkblue);font-size:1.5rem;font-weight:var(--font-medium);margin-bottom:0.5rem;margin-top:-16em}.home-content.svelte-1z09e50.svelte-1z09e50{color:var(--spat);display:block;font-size:1rem;font-weight:var(--font-semi-bold);margin-bottom:0.5rem}.parallax2.svelte-1z09e50.svelte-1z09e50{display:none}.parallax.svelte-1z09e50.svelte-1z09e50{margin-top:6em;position:relative;display:flex;justify-content:center;align-items:center;height:50rem}#text.svelte-1z09e50.svelte-1z09e50{position:absolute;margin-left:2em}.parallax.svelte-1z09e50 img.svelte-1z09e50{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media screen and (min-width: 454px){.home-title.svelte-1z09e50.svelte-1z09e50{margin-top:-13em}.home-content.svelte-1z09e50.svelte-1z09e50{font-size:1.4em}#text.svelte-1z09e50.svelte-1z09e50{padding-left:1rem}.parallax.svelte-1z09e50.svelte-1z09e50{margin-top:-4rem;height:60rem}}@media screen and (min-width: 568px){.home-title.svelte-1z09e50.svelte-1z09e50{font-size:2.5em;margin-top:-12em}.home-content.svelte-1z09e50.svelte-1z09e50{font-size:1.7em}.parallax.svelte-1z09e50.svelte-1z09e50{margin-top:-5rem;height:75rem}}@media screen and (min-width: 720px){#text.svelte-1z09e50.svelte-1z09e50{padding:0 3em 0 3em}.home-title.svelte-1z09e50.svelte-1z09e50{font-size:2.8em;margin-top:-14.3em}.parallax.svelte-1z09e50.svelte-1z09e50{height:95rem}}@media screen and (min-width: 720px){#text.svelte-1z09e50.svelte-1z09e50{padding:0 7em 0 7em}.home-title.svelte-1z09e50.svelte-1z09e50{font-size:2.8em;margin-top:-13em}}@media screen and (min-width: 820px){#text.svelte-1z09e50.svelte-1z09e50{padding:0 7em 0 7em}.home-title.svelte-1z09e50.svelte-1z09e50{font-size:2.8em;margin-top:-13em}}@media screen and (min-width: 960px){#text.svelte-1z09e50.svelte-1z09e50{padding:0 5em 0 5em}.parallax.svelte-1z09e50.svelte-1z09e50{height:100rem}}@media screen and (min-width: 1024px){.parallax.svelte-1z09e50.svelte-1z09e50{display:none}#text.svelte-1z09e50.svelte-1z09e50{display:none}.parallax.svelte-1z09e50 img.svelte-1z09e50{display:none}.parallax2.svelte-1z09e50.svelte-1z09e50{position:relative;display:flex;justify-content:center;align-items:center;height:75rem}#text2.svelte-1z09e50.svelte-1z09e50{position:relative;margin-left:1em}.parallax2.svelte-1z09e50 img.svelte-1z09e50{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.home-content2.svelte-1z09e50.svelte-1z09e50{color:var(--spat);font-size:1.5em;display:block;font-weight:var(--font-semi-bold);margin-bottom:var(--mb-0-75)}.home-title2.svelte-1z09e50.svelte-1z09e50{color:var(--darkblue);font-size:2rem;margin-bottom:0.5rem;margin-top:-15em}}@media screen and (min-width: 1250px){.parallax.svelte-1z09e50.svelte-1z09e50{display:none}#text.svelte-1z09e50.svelte-1z09e50{display:none}.parallax.svelte-1z09e50 img.svelte-1z09e50{display:none}.parallax2.svelte-1z09e50.svelte-1z09e50{position:relative;display:flex;justify-content:center;align-items:center;height:100rem;margin-top:-12em}#text2.svelte-1z09e50.svelte-1z09e50{position:absolute;margin-left:-30em}.parallax2.svelte-1z09e50 img.svelte-1z09e50{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$d);
  return `<main class="svelte-1z09e50" data-svelte-h="svelte-12qvawc"><section class="home" id="home"><section class="parallax svelte-1z09e50"><img src="assets/city.png" id="city" alt="city illustratie" class="svelte-1z09e50"> <img src="assets/water.png" id="water" alt="water illustratie" class="svelte-1z09e50"> <img src="assets/berg4.png" id="layer1" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/berg3.png" id="layer2" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/berg2.png" id="layer3" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/huis.png" id="layer4" alt="huis illustratie" class="svelte-1z09e50"> <img src="assets/bergje1.png" id="layer5" alt="berg illustratie" class="svelte-1z09e50"> <div id="text" class="svelte-1z09e50"><h1 class="home-title svelte-1z09e50">Een nieuwe generatie hydrologen</h1> <h2><span class="home-content svelte-1z09e50">Concreet op water en bodem</span></h2></div> <img src="assets/grondmobilee.png" id="ground" alt="grond illustratie" class="svelte-1z09e50"> <img src="assets/bird.png" id="bird" alt="vogel illustratie" class="svelte-1z09e50"></section> <section class="parallax2 svelte-1z09e50"><img src="assets/city-full.png" id="city2" alt="city illustratie" class="svelte-1z09e50"> <img src="assets/water-full.png" id="water2" alt="water illustratie" class="svelte-1z09e50"> <img src="assets/berg4-full.png" id="layer1-2" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/berg3-full.png" id="layer2-2" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/berg2-full.png" id="layer3-2" alt="berg illustratie" class="svelte-1z09e50"> <img src="assets/huisje-full.png" id="layer4-2" alt="huis illustratie" class="svelte-1z09e50"> <img src="assets/berg1-full.png" id="layer5-2" alt="berg illustratie" class="svelte-1z09e50"> <div id="text2" class="svelte-1z09e50"><h1 class="home-title2 svelte-1z09e50">Een nieuwe generatie hydrologen</h1> <span class="home-content2 svelte-1z09e50">Concreet op water en bodem</span></div> <img src="assets/backgroundfullfinall.png" id="ground2" alt="grond illustratie" class="svelte-1z09e50"> <img src="assets/bird-full.png" id="bird2" alt="vogel illustratie" class="svelte-1z09e50"></section></section> </main>`;
});
const ButtonExpertise_svelte_svelte_type_style_lang = "";
const css$c = {
  code: "a.svelte-120wzy7{background-color:var(--green);color:white;padding:.5rem 1rem;border-radius:.5rem;font-weight:var(--font-semi-bold);transition:0.2s;text-decoration:none;margin-bottom:1rem}",
  map: null
};
const ButtonExpertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$c);
  return `<a href="/" class="svelte-120wzy7" data-svelte-h="svelte-uk5wj2">Meer informatie</a>`;
});
const ButtonOver_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".button.svelte-15q2z4v{display:inline-block;background-color:var(\n      --green\n    );color:var(\n      --white-color\n    );padding:0.7rem\n      1rem;border-radius:5px;font-weight:var(\n      --font-semi-bold\n    );transition:0.3s}a.button.svelte-15q2z4v{color:white;text-decoration:none}",
  map: null
};
const ButtonOver = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$b);
  return `<a href="#expertise" class="button svelte-15q2z4v" data-svelte-h="svelte-18jmzj2">Onze expertise</a>`;
});
const ButtonContact_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "button.svelte-lji2uz{display:inline-block;background-color:var(--green);color:white;padding:0.5rem 1rem;margin-top:2em;border-radius:5px;font-weight:var(--font-semi-bold);transition:0.3s;text-decoration:none;width:100px;border:none}",
  map: null
};
const ButtonContact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<button class="button svelte-lji2uz" type="submit" data-svelte-h="svelte-3exzr8">Verstuur</button>`;
});
const IntroContact_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "h2.svelte-1tw630d{padding-top:2rem;color:var(--spat)}p.svelte-1tw630d{margin-bottom:1rem;color:var(--darkblue);font-size:0.8rem}",
  map: null
};
const IntroContact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<h2 class="svelte-1tw630d" data-svelte-h="svelte-18h9zxm">Contact</h2> <p class="svelte-1tw630d" data-svelte-h="svelte-yol3f7">Voel je vrij om contact met ons op te nemen</p>`;
});
const FormContact_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "form.svelte-os1ahh{display:flex;flex-direction:column;justify-content:center}label.svelte-os1ahh{margin-top:1rem;margin-bottom:0.5rem;color:var(--darkblue);font-size:0.8rem}input.svelte-os1ahh,textarea.svelte-os1ahh{width:100%;height:45px;padding:0.7em;border-color:#cccccc;border-top:#cccccc;border-left:#cccccc;border-radius:10px;border-width:1px}textarea.svelte-os1ahh{height:100px}input.svelte-os1ahh:focus,textarea.svelte-os1ahh:focus{opacity:1;border-radius:10px;border:10px;transform:scale(1.01, 1.01);outline:none;box-shadow:0 0 0 2px var(--darkblue)}input.svelte-os1ahh::placeholder,textarea.svelte-os1ahh::placeholder{opacity:80%;color:#cccccc;font-style:italic}",
  map: null
};
const FormContact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<form action="mailto:maaike.verplancke@hotmail.com" method="post" enctype="text/plain" class="svelte-os1ahh"><label for="name" class="svelte-os1ahh" data-svelte-h="svelte-mkr8rj">Voor- en achternaam*</label> <input type="text" id="name" name="name" required placeholder="Jan dekkers" class="svelte-os1ahh"> <label for="email" class="svelte-os1ahh" data-svelte-h="svelte-hudl0n">E-mail*</label> <input type="email" id="email" name="email" required placeholder="Jandekkers@hotmail.com" class="svelte-os1ahh"> <label for="message" class="svelte-os1ahh" data-svelte-h="svelte-1mciysf">Notitie*</label> <textarea id="message" name="message" rows="4" required placeholder="Opmerking..." class="svelte-os1ahh"></textarea> ${validate_component(ButtonContact, "ButtonContact").$$render($$result, {}, {}, {})} </form>`;
});
const Over_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "section.svelte-knwjh6{width:100%;padding-top:5rem;padding-bottom:5rem;margin-bottom:5rem;background:var(--lg-bg)}.inner-section.svelte-knwjh6{width:70%;margin-left:15%;margin-bottom:3rem}h2.svelte-knwjh6{padding:0rem;color:var(--spat);margin-bottom:1rem}.horizontal-flex-row.svelte-knwjh6{width:100%;display:flex;justify-content:space-between;gap:1rem}.text-container.svelte-knwjh6{width:100%}img.svelte-knwjh6{height:20rem;object-fit:contain;border-radius:0.5rem;width:100%}@media only screen and (max-width: 1100px){.horizontal-flex-row.svelte-knwjh6{flex-direction:column}.text-container.svelte-knwjh6{width:100%}.image-container.svelte-knwjh6{width:100%;margin-top:1rem}img.svelte-knwjh6{height:10rem;width:100%;z-index:-1;object-fit:contain}.inner-section.svelte-knwjh6{width:70%;margin-bottom:2rem}}",
  map: null
};
const Over = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$7);
  return ` ${each(data.overs, (item) => {
    return `<section class="climate-container svelte-knwjh6"><div class="inner-section svelte-knwjh6"><div class="horizontal-flex-row svelte-knwjh6"><div class="text-container svelte-knwjh6"><h2 class="svelte-knwjh6">${escape(item.title)}</h2> <p><!-- HTML_TAG_START -->${item.content.html}<!-- HTML_TAG_END --></p> ${validate_component(ButtonOver, "ButtonOver").$$render($$result, {}, {}, {})}</div> <div class="image-container svelte-knwjh6"><img${add_attribute("src", item.image.url, 0)} alt="boom illustratie" loading="lazy" class="svelte-knwjh6"></div> </div></div> </section>`;
  })}`;
});
const Expertise_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".expertise.svelte-xq0fp0.svelte-xq0fp0{background-color:white;display:flex;flex-direction:column;position:relative}.card-img.svelte-xq0fp0.svelte-xq0fp0{width:100%;height:100%}.expertise-title.svelte-xq0fp0.svelte-xq0fp0{font-size:1.6rem;color:var(--spat);font-weight:600;margin-left:15%}.expertise.svelte-xq0fp0 h3.svelte-xq0fp0{font-size:1.2rem;color:var(--darkblue);font-weight:600;text-align:center;padding-bottom:1em}.expertise__wrapper.svelte-xq0fp0.svelte-xq0fp0{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:6rem 0rem;gap:1rem;width:70%;margin-left:15%}.expertise__card.svelte-xq0fp0.svelte-xq0fp0{height:22em;width:15em;border-radius:.5rem;display:flex;flex-direction:column;justify-content:center;align-items:center;box-shadow:0 8px 10px rgba(174, 190, 205, 0.3);background-color:var(--lg-bg);color:var(--darkblue);transition:transform 0.3s ease-in;cursor:pointer}.expertise__card.svelte-xq0fp0 img.svelte-xq0fp0{padding-bottom:2em}.expertise__card.svelte-xq0fp0.svelte-xq0fp0:nth-child(2),.expertise__card.svelte-xq0fp0.svelte-xq0fp0:nth-child(3){background-color:var(--lg-bg)}.expertise__card.svelte-xq0fp0.svelte-xq0fp0:hover{transform:scale(1.075);transition:0.2s;cursor:pointer}@media screen and (max-width: 1023px){.expertise__wrapper.svelte-xq0fp0.svelte-xq0fp0{flex-direction:column;padding:4rem 2rem}.expertise__card.svelte-xq0fp0.svelte-xq0fp0{width:100%;max-width:300px}}@media screen and (max-width: 767px){.expertise__card.svelte-xq0fp0.svelte-xq0fp0{height:auto;padding:2rem}}",
  map: null
};
const Expertise = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return ` <section class="expertise section svelte-xq0fp0"> <header class="expertise-header" data-svelte-h="svelte-1g1mpjp"><h2 class="expertise-title svelte-xq0fp0">Expertise</h2></header>  <div class="expertise__wrapper svelte-xq0fp0"> <div class="expertise__card svelte-xq0fp0"><img src="assets/Untitled4.png" alt="Illustratie klimaatadaptatie voor een groenere wereld" class="card-img svelte-xq0fp0"> <h3 class="svelte-xq0fp0" data-svelte-h="svelte-1bjuaf8">Klimaatadaptatie</h3> ${validate_component(ButtonExpertise, "ButtonExpertise").$$render($$result, {}, {}, {})}</div>  <div class="expertise__card svelte-xq0fp0"><img src="assets/Untitled3.png" alt="Illustratie waterkwaliteit en milieubehoud" class="card-img svelte-xq0fp0"> <h3 class="svelte-xq0fp0" data-svelte-h="svelte-y27f55">Waterkwaliteit</h3> ${validate_component(ButtonExpertise, "ButtonExpertise").$$render($$result, {}, {}, {})}</div>  <div class="expertise__card svelte-xq0fp0"><img src="assets/brainlogo.png" alt="Illustratie B-Rain, een innovatieve oplossing" class="card-img svelte-xq0fp0"> <h3 class="svelte-xq0fp0" data-svelte-h="svelte-ix6lvj">B-Rain</h3> ${validate_component(ButtonExpertise, "ButtonExpertise").$$render($$result, {}, {}, {})}</div></div></section> `;
});
const Klimaatadaptatie_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-1xg4a9i{width:100%;background:var(--lg-bg);padding:1rem 0rem 2rem 0rem}.first-section.svelte-1xg4a9i{margin-top:5rem}.light-background.svelte-1xg4a9i{background:var(--lg-bg);padding:1rem 0rem 2rem 0rem}.inner-section.svelte-1xg4a9i{width:70%;margin:0 auto 3rem auto}h2.svelte-1xg4a9i{padding:0rem;color:var(--spat);margin-bottom:1rem;margin-top:3rem}.bold-text.svelte-1xg4a9i{font-weight:600}ul.svelte-1xg4a9i{list-style:none;font-size:1rem;color:var(--darkblue)}.horizontal-flex-row.svelte-1xg4a9i{width:100%;display:flex;justify-content:space-between;gap:10%}.text-container.svelte-1xg4a9i{width:50%}img.svelte-1xg4a9i{width:25rem;object-fit:cover;border-radius:0.5rem}@media only screen and (max-width: 1100px){.horizontal-flex-row.svelte-1xg4a9i{flex-direction:column}.text-container.svelte-1xg4a9i{width:100%}.image-container.svelte-1xg4a9i{width:100%;margin-top:1rem}img.svelte-1xg4a9i{height:10rem;width:100%;object-fit:cover}.mobile-image.svelte-1xg4a9i{display:block}.inner-section.svelte-1xg4a9i{width:70%;margin-bottom:2rem}}",
  map: null
};
const Klimaatadaptatie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$5);
  return `${each(data.klimaatadaptaties, (klimaat) => {
    return `<div class="light-background svelte-1xg4a9i"><section class="first-section svelte-1xg4a9i"><div class="inner-section svelte-1xg4a9i"><div class="horizontal-flex-row svelte-1xg4a9i"><div class="text-container svelte-1xg4a9i"><h2 class="svelte-1xg4a9i">${escape(klimaat.title)}</h2> <p class="bold-text svelte-1xg4a9i"><!-- HTML_TAG_START -->${klimaat.boldText.html}<!-- HTML_TAG_END --></p> <p><!-- HTML_TAG_START -->${klimaat.content.html}<!-- HTML_TAG_END --></p> <ul aria-labelledby="klimaatTitel" class="svelte-1xg4a9i">${each(klimaat.lijst, (item) => {
      return `<li><i class="fa fa-arrow-right" aria-hidden="true"></i> ${escape(item)} </li>`;
    })} </ul></div> <div class="image-container svelte-1xg4a9i"><img class="left-img svelte-1xg4a9i"${add_attribute("src", klimaat.image.url, 0)} alt="Afbeelding ter illustratie van Klimaatadaptatie" loading="lazy"> </div></div> </div></section> </div>`;
  })} ${each(data.gemeentens, (gemeenten) => {
    return `<section class="svelte-1xg4a9i"><div class="inner-section svelte-1xg4a9i"><div class="horizontal-flex-row svelte-1xg4a9i"><div class="image-container svelte-1xg4a9i"><img class="mobile-image svelte-1xg4a9i"${add_attribute("src", gemeenten.image.url, 0)} alt="Afbeelding ter illustratie van Klimaatadaptatie" loading="lazy"></div> <div class="text-container svelte-1xg4a9i"><h2 class="svelte-1xg4a9i">${escape(gemeenten.title)}</h2> <p class="bold-text svelte-1xg4a9i">${escape(gemeenten.boldTekst.text)}</p> <p>${escape(gemeenten.content.text)} </p></div> </div></div> </section>`;
  })} ${each(data.bedrijventerreinens, (bedrijf) => {
    return `<section class="svelte-1xg4a9i"><div class="inner-section svelte-1xg4a9i"><div class="horizontal-flex-row svelte-1xg4a9i"><div class="text-container svelte-1xg4a9i"><h2 class="svelte-1xg4a9i">${escape(bedrijf.title)}</h2> <p class="bold-text svelte-1xg4a9i"><!-- HTML_TAG_START -->${bedrijf.boldTekst.html}<!-- HTML_TAG_END --></p> <p><!-- HTML_TAG_START -->${bedrijf.content.html}<!-- HTML_TAG_END --></p> <ul aria-labelledby="klimaatTitel" class="svelte-1xg4a9i">${each(bedrijf.list, (item) => {
      return `<li><i class="fa fa-arrow-right" aria-hidden="true"></i> ${escape(item)} </li>`;
    })} </ul></div> <div class="image-container left svelte-1xg4a9i"><img${add_attribute("src", bedrijf.image.url, 0)} alt="Afbeelding ter illustratie van Klimaatadaptatie" loading="lazy" class="svelte-1xg4a9i"></div> </div></div> </section>`;
  })}`;
});
const Waterkwaliteit_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-91f8i4{width:100%}.first-section.svelte-91f8i4{margin-top:5rem;margin-bottom:5rem}.inner-section.svelte-91f8i4{width:70%;margin-left:15%;margin-bottom:3rem}h2.svelte-91f8i4{padding:0rem;color:var(--spat);margin-bottom:1rem}.bold-text.svelte-91f8i4{font-weight:600}ul.svelte-91f8i4{list-style:none;font-size:1rem;color:var(--darkblue)}.horizontal-flex-row.svelte-91f8i4{width:100%;display:flex;justify-content:space-between;gap:10%}.text-container.svelte-91f8i4{width:50%;margin-top:8rem}img.svelte-91f8i4{height:20rem;object-fit:cover;border-radius:.5rem}@media only screen and (max-width: 1100px){.horizontal-flex-row.svelte-91f8i4{flex-direction:column}.text-container.svelte-91f8i4{width:100%;margin-top:1rem}.image-container.svelte-91f8i4{width:100%;margin-top:0rem}img.svelte-91f8i4{height:10rem;width:100%;object-fit:cover}.inner-section.svelte-91f8i4{width:70%;margin-bottom:2rem}}",
  map: null
};
const Waterkwaliteit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<main data-svelte-h="svelte-d8k5i4"><section class="first-section svelte-91f8i4"><div class="inner-section svelte-91f8i4"><div class="horizontal-flex-row svelte-91f8i4"><div class="image-container svelte-91f8i4"><h2 class="svelte-91f8i4">Waterkwaliteit</h2> <p class="bold-text svelte-91f8i4">Wat betekent de Kaderrichtlijn Water voor jou?</p> <img src="assets/Octopus-amico.svg" alt="foto aquathermie" class="svelte-91f8i4"></div> <div class="text-container svelte-91f8i4"><p>De Kaderrichtlijn Water (KRW) is een Europese richtlijn die regelt dat oppervlaktewateren en het grondwater van voldoende kwaliteit zijn. Toch voldoen pas enkele wateren aan deze norm. We staan nu op een keerpunt. Binnen 5 jaar, in 2027, moeten alle oppervlaktewateren en ons grondwater voldoen aan de KRW. Vergelijkingen met de stikstofcrisis zijn snel gemaakt, maar de KRW biedt ook kansen in proposities, aanbestedingen en vergunningverlening.</p> <p>SPATwater biedt hulp aan organisaties bij het identificeren van de implicaties van de KRW voor hun specifieke situatie. Dit doen wij onder andere door middel van:</p> <ul class="svelte-91f8i4"><li><i class="fa fa-arrow-right" aria-hidden="true"></i> Het verzorgen van kennissessies</li> <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Analyse van huidige KRW-risico’s en kansen</li> <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Propositieverbetering</li></ul></div></div></div></section> </main>`;
});
const Brain_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "section.svelte-95wwht{width:100%;padding-top:5rem;padding-bottom:3rem;margin-bottom:5rem;background:var(--lg-bg)}.inner-section.svelte-95wwht{width:70%;margin-left:15%;margin-bottom:3rem}h2.svelte-95wwht{padding:0rem;color:var(--spat);margin-bottom:1rem}.bold-text.svelte-95wwht{font-weight:600}.horizontal-flex-row.svelte-95wwht{width:100%;display:flex;justify-content:space-between;gap:10%}.text-container.svelte-95wwht{width:60%}.image-container.svelte-95wwht{width:40%}img.svelte-95wwht{height:20rem;object-fit:contain;border-radius:.5rem;width:100%}@media only screen and (max-width: 1100px){.horizontal-flex-row.svelte-95wwht{flex-direction:column}.text-container.svelte-95wwht{width:100%}.image-container.svelte-95wwht{width:100%;margin-top:1rem}img.svelte-95wwht{height:20rem;width:100%;z-index:-1;object-fit:cover}.inner-section.svelte-95wwht{width:70%;margin-bottom:2rem}}",
  map: null
};
const Brain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<main data-svelte-h="svelte-bmfzz1"><section class="climate-container svelte-95wwht"><div class="inner-section svelte-95wwht"><div class="horizontal-flex-row svelte-95wwht"><div class="text-container svelte-95wwht"><h2 class="svelte-95wwht">b-RAIN</h2> <p class="bold-text svelte-95wwht">b-RAIN is het project rondom het koppelen van weerberichten aan wateropvang/gebruik in de tuin.</p> <p>Weersextremen in Nederland nemen steeds verder toe. Enerzijds komen in periodes van droogte, watertekorten vaker voor en anderzijds hebben we vaker te maken met extreme neerslag, met wateroverlast tot gevolg.</p> <p>B-rain wil bewoners positief betrokken houden bij het bufferen van regenwater en het groen houden van hun tuin. Door enkele gegevens in een app aan te geven, geeft deze app terug wanneer de regenwaterbuffer vol zit, wanneer deze geleegd moet worden (als er bijvoorbeeld een grote regenbui aan komt) en wanneer het lang niet regent (waardoor je zoveel mogelijk water in de regenwaterbuffer wil vasthouden).</p> <a href="#brain" class="button">Bekijk project</a></div> <div class="image-container svelte-95wwht"><img src="assets/bRAIN.png" alt="" class="svelte-95wwht"></div></div></div></section> </main>`;
});
const Team_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'section.svelte-i9cw23{background:white;width:70%;margin-left:15%}.team2.svelte-i9cw23{display:none}.team-title.svelte-i9cw23{padding:4rem 2.5rem;color:var(--spat)}.team.svelte-i9cw23{position:relative;background-color:white;height:100vh;padding-top:6em;padding-bottom:3em}.team-container.svelte-i9cw23{padding:2em 4em 2em 4em;overflow:hidden}.team-card.svelte-i9cw23{width:300px;height:240px;border-radius:10px}.team-text.svelte-i9cw23{position:absolute;bottom:1rem;left:1rem}.team-name.svelte-i9cw23,.team-mail.svelte-i9cw23{color:white}.team-mail.svelte-i9cw23{display:block;font-size:0.75rem}.team-img.svelte-i9cw23{transition:0.3s;width:100%}.team-img.svelte-i9cw23:hover{transform:scale(1.1)}@media screen and (min-width: 720px){.team.svelte-i9cw23{display:none}h2.svelte-i9cw23{font-size:1rem;padding:4rem 2rem}.team2.svelte-i9cw23{position:relative;background-color:white;display:grid;padding:0 0.4em 4em 0.4em}.team2-title.svelte-i9cw23{font-size:2rem;color:var(--spat);font-weight:600;padding-top:4em}.team2-wrapper.svelte-i9cw23{display:grid;justify-content:center;gap:2em;padding-bottom:3em;margin:0 auto;grid-template-columns:repeat(3, 1fr)}.team2-mees.svelte-i9cw23{background-image:url("/assets/Mees1_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px}.team2-timo.svelte-i9cw23{background-image:url("/assets/Timo1_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px}.team2-jesse.svelte-i9cw23{background-image:url("/assets/Jesse1_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px}.name.svelte-i9cw23{font-size:1.5rem;display:block;color:white}.mail.svelte-i9cw23{font-size:0.8rem;display:block;color:white}.personal-information.svelte-i9cw23{margin:14.5em 0em 0.3em 1em}.team2-mees.svelte-i9cw23:hover{background-image:url("/assets/Mees2_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px;transition:0.2s ease-in}.team2-timo.svelte-i9cw23:hover{background-image:url("/assets/Timo2_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px;transition:0.2s ease-in}.team2-jesse.svelte-i9cw23:hover{background-image:url("/assets/Jesse2_fullscreen.png");background-size:100%;background-repeat:no-repeat;border-radius:10px;width:250px;height:300px;transition:0.2s ease-in}}',
  map: null
};
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="team section svelte-i9cw23" data-svelte-h="svelte-t7254u"><h2 class="team-title svelte-i9cw23">Team</h2> <div class="team-container swiper-container svelte-i9cw23"><div class="swiper-wrapper"> <div class="team-card swiper-slide svelte-i9cw23"><img src="assets/mees1.png" alt="foto Mees" class="team-img svelte-i9cw23">  <div class="team-text svelte-i9cw23"><h2 class="team-name svelte-i9cw23">Mees</h2> <h3 class="team-mail svelte-i9cw23">m.vmilligen@spatwater.nl</h3></div></div>  <div class="team-card swiper-slide svelte-i9cw23"><img src="assets/timo.png" alt="foto Mees" class="team-img svelte-i9cw23"> <div class="team-text svelte-i9cw23"><h2 class="team-name svelte-i9cw23">Timo</h2> <h3 class="team-mail svelte-i9cw23">t.vdberg@spatwater.nl</h3></div></div>  <div class="team-card swiper-slide svelte-i9cw23"><img src="assets/jesse.png" alt="foto Mees" class="team-img svelte-i9cw23"> <div class="team-text svelte-i9cw23"><h2 class="team-name svelte-i9cw23">Jesse</h2> <h3 class="team-mail svelte-i9cw23">j.schoenmakers@spatwater.nl</h3></div></div></div></div></section>  <section class="team2 discover svelte-i9cw23" id="team2" data-svelte-h="svelte-vax9zl"><h2 class="team2-title svelte-i9cw23">Team</h2> <div class="team2-wrapper svelte-i9cw23"><div class="team2-mees svelte-i9cw23"><div class="personal-information svelte-i9cw23"><h3 class="name svelte-i9cw23">Mees</h3> <h4 class="mail svelte-i9cw23">m.vmilligen@spatwater.nl</h4></div></div> <div class="team2-timo svelte-i9cw23"><div class="personal-information svelte-i9cw23"><h3 class="name svelte-i9cw23">Timo</h3> <h4 class="mail svelte-i9cw23">t.vdberg@spatwater.nl</h4></div></div> <div class="team2-jesse svelte-i9cw23"><div class="personal-information svelte-i9cw23"><h3 class="name svelte-i9cw23">Jesse</h3> <h4 class="mail svelte-i9cw23">j.schoenmakers@spatwater.nl</h4></div></div></div> </section>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".contact-section.svelte-1xmnikx{container:sidebar / inline-size;display:grid;grid-template-columns:1fr 1fr}.contact.svelte-1xmnikx{padding:4rem 5rem;height:auto;background-color:var(--lg-bg)}section.contact.svelte-1xmnikx{padding:2em}img.svelte-1xmnikx{width:90%}@container sidebar (min-width: 700px){img.svelte-1xmnikx{margin-left:2em;margin-top:-2em}}@container sidebar (max-width: 700px){img.svelte-1xmnikx{display:none}.main-container.svelte-1xmnikx{width:100vw;padding-right:6em;grid-template-columns:1fr}}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="contact svelte-1xmnikx">${validate_component(IntroContact, "IntroContact").$$render($$result, {}, {}, {})} <section class="contact-section svelte-1xmnikx" id="experience"><div class="main-container svelte-1xmnikx">${validate_component(FormContact, "FormContact").$$render($$result, {}, {}, {})}</div> <img src="assets/tree.png" alt="afbeelding boom naast invulformulier" class="svelte-1xmnikx"></section> </section>`;
});
const Partners_svelte_svelte_type_style_lang = "";
const css = {
  code: ".scroll-horizontal.svelte-1o1tbtn{overflow-x:auto;display:flex;align-items:center;flex-direction:row;flex-wrap:nowrap;gap:2rem;scroll-snap-type:x mandatory;padding:1rem 1rem}.sponsor-img.svelte-1o1tbtn{width:100px;height:auto;opacity:0.5;filter:invert(0.5);transition:0.3s}@media screen and (min-width: 720px){.sponsor-img.svelte-1o1tbtn{width:100px;opacity:0.5;filter:invert(0.7);transition:0.3s}}@media screen and (min-width: 768px){.sponsor-img.svelte-1o1tbtn{width:150px}.scroll-horizontal.svelte-1o1tbtn{gap:8rem;padding:5rem 5rem}}",
  map: null
};
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return ` <div class="scroll-horizontal svelte-1o1tbtn">${each(data.partner, (partner) => {
    return `<a${add_attribute("href", partner.link, 0)}><img${add_attribute("src", partner.image.url, 0)} alt="logo's partners" class="sponsor-img svelte-1o1tbtn"></a>`;
  })}</div> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})} ${validate_component(Over, "Over").$$render($$result, { data }, {}, {})} ${validate_component(Expertise, "Expertise").$$render($$result, {}, {}, {})} ${validate_component(Klimaatadaptatie, "Klimaatadaptatie").$$render($$result, { data }, {}, {})} ${validate_component(Waterkwaliteit, "Waterkwaliteit").$$render($$result, {}, {}, {})} ${validate_component(Brain, "Brain").$$render($$result, {}, {}, {})} ${validate_component(Team, "Team").$$render($$result, { data }, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} ${validate_component(Partners, "Partners").$$render($$result, { data }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
