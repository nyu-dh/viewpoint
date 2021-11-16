<script>
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { manifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { manifestURI, selectedViewer, selectedTheme, query } from '$lib/vars/stores.js';

	import ManifestControls from '$lib/form/ManifestControls.svelte';
	import ViewerControls from '$lib/form/ViewerControls.svelte';
	import Results from '$lib/form/Results.svelte';

	$manifestURI = manifests[0];
	$selectedViewer = viewers[0];
	$selectedTheme = $selectedViewer.themes[0];

	$: $query = `${base}/${$selectedViewer.id}#manifest=${$manifestURI}&theme=${$selectedTheme.toLowerCase()}`;
</script>

<ManifestControls />

<ViewerControls />

<Results />
