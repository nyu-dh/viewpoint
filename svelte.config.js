import adapter from '@sveltejs/adapter-static';

export default {
	basepath: '/viewpoint/',
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};
