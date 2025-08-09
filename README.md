# Site de Vendas — 100% Grátis (Vercel/GitHub Pages)

Site one-page responsivo estilo Shopee/Mercado Livre, focado em conversão, com checkout externo (Mercado Pago/Pix).

## Como publicar (Vercel) — 3 passos
1. Crie uma conta em https://vercel.com (grátis).
2. Clique **New Project** → **Import** este projeto (suba os arquivos para um repositório no GitHub ou arraste a pasta ZIP).
3. Deploy. Seu site sai em `https://seusite.vercel.app`.

> Alternativa: **GitHub Pages**
- Crie um repositório, suba os arquivos, vá em **Settings → Pages → Deploy from branch** (main / root).

## O que editar
- **`index.html`**: títulos, textos, preço, benefícios, contatos.
- **`app.js`**: substitua `checkoutURL` pelo link do seu checkout (Mercado Pago/Pix).
- **`assets/logo.png`**: coloque seu logo.
- **`assets/prod-*.jpg`**: troque pelas fotos do seu produto.
- **`app.js`**: ajuste o número do WhatsApp (DDI + DDD + número).

## Dicas de conversão
- Use preço quebrado (ex: R$ 99,90) e destaque Pix.
- Tenha 3–5 fotos de qualidade (close + uso real).
- Garanta prova social: 3–6 avaliações curtas e críveis.
- Anúncio: um criativo simples com benefício claro, CTA e prova social.

## Pixel/Analytics
No `<head>` há comentários com placeholders para colar seu Meta Pixel/Google Analytics.
