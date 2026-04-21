import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeRaw from 'rehype-raw';

export default defineConfig({
  site: 'https://wiki.athlonroma.it',
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
    remarkRehype: { allowDangerousHtml: true },
    rehypePlugins: [rehypeRaw]
  }
});
