<script>
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import queryString from 'query-string';
	import { manifests, viewers } from '$lib/vars/constants.js';
	import { manifestURI, queryObject, query, selectedViewer } from '$lib/vars/stores.js';

	import ManifestControls from '$lib/form/ManifestControls.svelte';
	import ViewerControls from '$lib/form/ViewerControls.svelte';

	$manifestURI = manifests[0];
	$selectedViewer = viewers[0];

	$: $query = `${base}/${$selectedViewer.id}#${queryString.stringify($queryObject, {})}`;
	$: $query, console.log($query);
</script>


<ManifestControls />

<ViewerControls />
