import assert from "node:assert/strict";
import test from "node:test";

test("renders the production wiki metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<title>Oopsie Croco Wiki<\/title>/i);
  assert.match(html, /<meta(?=[^>]*\bname=["']description["'])(?=[^>]*\bcontent=["'][^"']*Guia prático[^"']*["'])[^>]*>/i);
});

// Uma pagina de heroi quebrada passou despercebida em 31 ago. 2026 porque o
// teste so olhava a home. Agora toda rota publicada precisa responder 200.
test("every published route renders", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-routes`);
  const { default: worker } = await import(workerUrl.href);
  // Slugs escritos a mao de proposito: importar o modulo .ts daqui falha em
  // silencio e o teste passa sem testar ficha nenhuma, que foi como a pagina
  // quebrada escapou.
  const fichas = [
    "kazers-darkblade", "catwoman", "tidecaller", "flower-spirit", "light-archer",
    "red-queen", "dragon-warrior", "succubus", "lilith", "onmyoji", "phantom",
    "holy-knight", "bounty-hunter", "star-mage", "mia-morning-dew", "shadow-wolf",
    "maya-necromancer-apprentice", "karin-pharaoh", "artemis", "athena",
  ];
  const rotas = [
    "/", "/personagens", "/equipamentos", "/coop", "/runs", "/ur",
    "/expedicao", "/invocacao",
    ...fichas.map((slug) => `/personagens/${slug}`),
  ];

  const falhas = [];
  for (const rota of rotas) {
    const response = await worker.fetch(
      new Request(`http://localhost${rota}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    if (response.status !== 200) falhas.push(`${rota} -> ${response.status}`);
  }
  assert.deepEqual(falhas, [], `rotas quebradas: ${falhas.join(", ")}`);
});
