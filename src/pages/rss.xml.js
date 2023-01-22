import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Astro Blog',
    description: 'My Astro journey',
    site: 'https://spontaneous-moonbeam-a0f0a7.netlify.app',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
  });
}