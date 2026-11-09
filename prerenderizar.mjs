#!/usr/bin/env node
/* Pré-renderização: depois do vite build, grava em dist/index.html o HTML já
 * montado pelo React, para a página ser legível sem JS. Usa
 * scripts/lib/navegador.mjs, dois níveis acima. */
import { readFileSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { carregarPlaywright, abrirNavegador } from "../../scripts/lib/navegador.mjs";

const aqui = dirname(fileURLToPath(import.meta.url));
const dist = join(aqui, "dist");

const TIPOS = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".json": "application/json",
};

function servir(pasta, porta) {
  return new Promise((resolve) => {
    const servidor = createServer((req, res) => {
      let caminho = decodeURIComponent(req.url.split("?")[0]);
      if (caminho === "/") caminho = "/index.html";
      try {
        const arquivo = readFileSync(join(pasta, caminho));
        res.writeHead(200, { "Content-Type": TIPOS[extname(caminho)] || "application/octet-stream" });
        res.end(arquivo);
      } catch {
        res.writeHead(404);
        res.end();
      }
    });
    servidor.listen(porta, () => resolve(servidor));
  });
}

const porta = 4800 + Math.floor(Math.random() * 500);
const servidor = await servir(dist, porta);
const chromium = await carregarPlaywright();
const navegador = await abrirNavegador(chromium);
try {
  const pagina = await navegador.newPage();
  const erros = [];
  pagina.on("pageerror", (e) => erros.push(e.message));
  await pagina.goto(`http://127.0.0.1:${porta}`, { waitUntil: "networkidle", timeout: 30000 });
  await pagina.waitForFunction(
    () => {
      const raiz = document.getElementById("root");
      return !!raiz && raiz.children.length > 0;
    },
    { timeout: 15000 }
  );
  if (erros.length) {
    console.error("Erros de JS durante a pré-renderização, build interrompido:");
    erros.forEach((e) => console.error(" -", e));
    process.exitCode = 1;
  } else {
    // Remove as classes do motor para o HTML estático não nascer invisível sem JS.
    const html = await pagina.evaluate(() => {
      document.documentElement.classList.remove("js", "fx-js", "fx-pronto", "fx-reduzido");
      document.querySelectorAll(".fx-em-cena").forEach((el) => el.classList.remove("fx-em-cena"));
      document.querySelectorAll("[data-fx], [data-etapa]").forEach((el) => {
        el.style.transitionDelay = "";
        el.style.transitionDuration = "";
        el.removeAttribute("data-etapa");
      });
      return "<!doctype html>\n" + document.documentElement.outerHTML;
    });
    // Com base relativa, o Vite resolve as imagens para a URL do servidor local.
    writeFileSync(join(dist, "index.html"), html.replaceAll(`http://127.0.0.1:${porta}/`, "./"));
    console.log("Pré-renderizado: dist/index.html agora tem HTML real, legível sem JS.");
  }
} finally {
  await navegador.close();
  servidor.close();
}
