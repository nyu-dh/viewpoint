<script>
	import { base } from '$app/paths';
	export let siteTitle, siteDescription;
	export let buildTime = new Date().toLocaleString();
</script>

<h1 class="title">
	<a href="{base}/">{siteTitle} </a>
</h1>
<p class="subtitle">{siteDescription}</p>
<p class="pb-5">last deployed @ {buildTime.toLowerCase()}</p>
