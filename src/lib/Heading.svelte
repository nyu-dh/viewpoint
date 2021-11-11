<script>
	import { base } from '$app/paths';
	import { timestamp } from '$lib/BuildTimeStamp.svelte';

	export let siteTitle, siteDescription;
</script>

<h1 class="title">
	<a href="{base}/">{siteTitle} </a>
</h1>
<p class="subtitle">{siteDescription}</p>
<p class="pb-5">last built on {timestamp.toLowerCase()}</p>
