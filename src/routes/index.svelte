<script>
	export const prerender = true;
	export const siteTitle = 'nyu-dss/viewpoint';
	export const siteDescription = 'embeddable iiif viewers from uri params with svelte-kit';

	import { base } 		from '$app/paths';

	import Heading 			from '$lib/Heading.svelte';
	import QueryBuilder from '$lib/QueryBuilder.svelte';
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<link rel="icon" href="{base}/favicon.png" />
</svelte:head>

<section class="hero is-info is-fullheight">
	<div class="hero-body">
		<div class="container">

			<Heading {siteTitle} {siteDescription} />
			<QueryBuilder />
		</div>
	</div>
</section>
