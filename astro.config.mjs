import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://wiki.athlonroma.it',
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
    rehypePlugins: [],
    remarkPlugins: [],
    // Permetti HTML raw nei file .md
    remarkRehype: { allowDangerousHtml: true },
    rehypePlugins: [['rehype-raw', {}]]
  }
});
