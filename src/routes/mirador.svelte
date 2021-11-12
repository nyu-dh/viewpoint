<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(async () => {
		const Mirador = await import('mirador/dist/mirador.min.js');

		const manifestID = $page.query.get('manifest');
		const theme = $page.query.get('theme');

		const miradorInstance = Mirador.viewer({
			id: 'mirador',
			selectedTheme: theme,
			language: 'en',
			window: {
				allowClose: false,
				allowMaximize: true,
				defaultSideBarPanel: 'info',
				sideBarOpenByDefault: false,
				defaultView: 'book'
			},
			workspace: {
				type: 'mosaic' // Which workspace type to load by default. Other possible values are "elastic"
			},
			thumbnailNavigation: {
				defaultPosition: 'off'
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
	});
</script>

<div id="mirador" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0"></div>
