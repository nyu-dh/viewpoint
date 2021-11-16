import staticAdapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: staticAdapter(),
		paths: {
			base: '/viewpoint'
		},
		target: '#svelte'
	}
};

export default config;
