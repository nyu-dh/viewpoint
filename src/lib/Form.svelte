<script>
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import queryString from 'query-string';
	import { sampleManifests, viewers } from '$lib/vars/constants.js';
	import { selectedManifests, queryObject, query, selectedViewer } from '$lib/vars/stores.js';

	import ManifestControls from '$lib/form/ManifestControls.svelte';
	import ViewerControls from '$lib/form/ViewerControls.svelte';

	$selectedManifests = [sampleManifests[0], sampleManifests[1]];
	$selectedViewer = viewers[0];

	$: $query = `${base}/${$selectedViewer.id}#${queryString.stringify($queryObject, { arrayFormat: 'bracket'})}`;
</script>


<ManifestControls />

<ViewerControls />
