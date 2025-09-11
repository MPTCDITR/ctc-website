import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { defaultLang } from '@/i18n/ui';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const defaultPosts = posts.filter(post => post.slug.startsWith(defaultLang));
  
	return rss({
	  title: SITE_TITLE,
	  description: SITE_DESCRIPTION,
	  site: context.site,
	  items: defaultPosts.map((post) => ({
		title: post.data.title,
		pubDate: post.data.date,
		description: post.data.description,
		author: post.data.author,
		link: `/blog/${post.slug.split('/').slice(1).join('/')}`,
	  })),
	});
  }

