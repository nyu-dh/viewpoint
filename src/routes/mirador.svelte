<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import queryString from 'query-string';

	onMount(async () => {
		const Mirador = await import('mirador/dist/mirador.min.js');

		function fetch(object, key, def='') {
			return key in object ? object[key] : def;
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

		function windowObjectArray(manifests) {
			let result = [];
			manifests.forEach(m => result.push({ manifestId: m }));
			return result;
		}


		if (typeof window !== 'undefined') {
			const response 					= queryString.parse(window.location.hash, {parseBooleans: true, arrayFormat: 'bracket'});
			const manifests 				= fetch(response, 'manifests');
			const theme 		 				= fetch(response, 'theme', 'light');
			const view 							= fetch(response, 'view', 'single');
			const thumbs 						= thumbnailCustomParse(response, 'thumbs');
			const sidebarOpen 			= fetch(response, 'sidebar', false);
			const workspaceControls = fetch(response, 'workspacecontrols', false);
			const windows						= windowObjectArray(manifests);

			console.log(manifests)

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
				windows: windows
			});
		}
	});
</script>

<div id="mirador" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0" />
