# Athlon Wiki

Knowledge base di Athlon Club Roma — built with [Astro](https://astro.build) + [Decap CMS](https://decapcms.org) + [Netlify](https://netlify.com).

---

## Stack

| Componente | Tecnologia |
|---|---|
| Framework | Astro 4 (static site generation) |
| Contenuti | Markdown + Frontmatter |
| CMS | Decap CMS (interfaccia web per editare articoli) |
| Deploy | Netlify (CI/CD automatico da GitHub) |
| Auth CMS | Netlify Identity + Git Gateway |

---

## Setup iniziale (una tantum)

### 1. Prerequisiti

- Node.js 20+
- Account GitHub
- Account Netlify

### 2. Clone e install

```bash
git clone https://github.com/maurizio-gif/Wiki-Athlon.git
cd Wiki-Athlon
npm install
```

### 3. Sviluppo locale

```bash
npm run dev
# → http://localhost:4321
```

### 4. Build

```bash
npm run build
# Output in /dist
```

---

## Deploy su Netlify

### Prima volta

1. Vai su [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**
2. Seleziona il repo `Wiki-Athlon` su GitHub
3. Impostazioni build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `20`
4. Clicca **Deploy site**

### Configurare Netlify Identity (per il CMS)

Dopo il primo deploy:

1. **Site settings → Identity → Enable Identity**
2. **Registration:** cambia da "Open" a **"Invite only"**
3. Scendi a **Git Gateway → Enable Git Gateway**
4. Torna su **Identity → Invite users** e invita te stesso con la tua email
5. Controlla la mail e accetta l'invito

### Accedere al CMS

Una volta configurato, vai su:

```
https://wiki.athlonroma.it/admin/
```

Login con le credenziali Netlify Identity.

---

## Aggiungere un articolo dal CMS

1. Apri `/admin/` sul sito live
2. Clicca **"Articoli Wiki" → "Nuovo Articolo"**
3. Compila:
   - **Titolo** — nome dell'articolo
   - **Descrizione** — sommario (una riga)
   - **Area** — una o più categorie
   - **Slug URL** — cartella (generali / adulti / snb)
   - **Ordine** — posizione nella sezione
   - **Tag** — parole chiave per la ricerca
   - **Contenuto** — corpo dell'articolo in Markdown
4. Clicca **"Salva"**
5. Clicca **"Pubblica"** → il sito si rebuilda automaticamente su Netlify (~1 min)

---

## Aggiungere un articolo manualmente (via GitHub)

Crea un file `.md` in `src/content/articles/{area}/`:

```markdown
---
title: "Titolo dell'articolo"
description: "Breve sommario dell'articolo."
area: "Adulti – Club"
order: 10
tags: ["parola1", "parola2"]
draft: false
---

## Sezione principale

Testo del paragrafo con **grassetto** e *corsivo*.

### Sottosezione

- Elemento lista 1
- Elemento lista 2
- Elemento lista 3

1. Passo uno
2. Passo due
3. Passo tre

> Nota importante o avviso per l'utente.

[Link esterno](https://www.athlonroma.it)
```

Commit e push → Netlify rebuild automaticamente.

---

## Struttura del progetto

```
athlon-wiki/
├── public/
│   ├── logo.png              ← Logo Athlon (PNG con trasparenza)
│   ├── favicon.png
│   └── admin/
│       ├── index.html        ← Decap CMS UI
│       └── config.yml        ← Configurazione CMS
├── src/
│   ├── content/
│   │   ├── config.ts         ← Schema dei contenuti
│   │   └── articles/
│   │       ├── generali/     ← Articoli area Generali
│   │       ├── adulti/       ← Articoli area Adulti – Club
│   │       └── snb/          ← Articoli Scuola Nuoto Bambini
│   ├── layouts/
│   │   ├── Base.astro        ← Layout con header e footer
│   │   └── ArticleLayout.astro ← Layout pagina articolo + sidebar
│   ├── pages/
│   │   ├── index.astro       ← Homepage con griglia articoli
│   │   └── wikiathlon/
│   │       └── [slug].astro  ← Pagine articolo dinamiche
│   └── styles/
│       └── global.css        ← Design system Athlon
├── astro.config.mjs
├── netlify.toml
└── package.json
```

---

## URL degli articoli

Gli slug seguono la struttura: `wiki.athlonroma.it/wikiathlon/{area}/{nome-articolo}/`

Esempi:
- `/wikiathlon/adulti/disdetta-contratti-adulti/`
- `/wikiathlon/snb/preiscrizioni-nuoto/`
- `/wikiathlon/generali/prenotazioni/`

---

## Multi-area

Un articolo può apparire in più aree impostando `area` come array nel frontmatter:

```yaml
area: ["Adulti – Club", "Scuola Nuoto Bambini"]
```

L'articolo appare in entrambe le sezioni della homepage e della sidebar.

---

## Contatti tecnici

**Ready 2 Digital Srl** — [ready2digital.it](https://ready2digital.it)
