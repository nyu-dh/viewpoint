<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import queryString from 'query-string';

	onMount(async () => {
		const Mirador = await import('mirador/dist/mirador.min.js');

		function thumbnailViewParse(str) {
			switch (str) {
  			case 'right':
				case 'bottom':
    			return `far-${str}`;
				default:
					return 'off';
			}
		}


		if (typeof window !== 'undefined') {
			const parsed = queryString.parse(window.location.hash);

			const manifestID 	= parsed['manifest'];
			const theme 		 	= parsed['theme'] || 'light';
			const view 				= parsed['view'] || 'single';
			const thumbs 			= thumbnailViewParse(parsed['thumbs']);
			const sidebarOpen = JSON.parse(parsed['sidebar']) || false;

			console.log(view);

			const miradorInstance = Mirador.viewer({
				id: 'mirador',
				selectedTheme: theme,
				language: 'en',
				window: {
					allowClose: false,
					defaultSideBarPanel: 'info',
					allowMaximize: false,
					sideBarOpenByDefault: sidebarOpen,
					allowTopMenuButton: false,
					defaultView: view,
					views: []
				},
				thumbnailNavigation: {
					defaultPosition: thumbs
				},
				workspaceControlPanel: {
					enabled: false
				},
				windows: [
					{
						manifestId: manifestID
					}
				]
			});
		}
	});
</script>

<div id="mirador" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0" />
