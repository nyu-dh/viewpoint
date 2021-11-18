<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import queryString from 'query-string';

	onMount(async () => {
		const Mirador = await import('mirador/dist/mirador.min.js');

		function fetch(object, key, def='') {
			let result = key in object ? object[key] : def;
			switch (result) {
				case 'true':
					return true;
				case 'false':
					return false;
				default:
					return result;
			}
		}

		function thumbnailCustomParse(object, key) {
			let result = fetch(object, key);
			switch (result) {
				case 'right':
				case 'bottom':
					return `far-${result}`;
				default:
					return 'off';
			}
		}


		if (typeof window !== 'undefined') {
			const response = queryString.parse(window.location.hash);

			const manifestID 				= fetch(response, 'manifest');
			const theme 		 				= fetch(response, 'theme', 'light');
			const view 							= fetch(response, 'view', 'single');
			const thumbs 						= thumbnailCustomParse(response, 'thumbs');
			const sidebarOpen 			= fetch(response, 'sidebar', false);
			const workspaceControls = fetch(response, 'workspacecontrols', false);

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
					enabled: workspaceControls
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
