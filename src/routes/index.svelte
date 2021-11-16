<script>
	export const prerender = true;

	import { siteTitle, siteDescription } from '$lib/vars/constants.js';
	import { timestamp } from '$lib/BuildTimeStamp.svelte';
	import { base } from '$app/paths';

	import Form from '$lib/Form.svelte';
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<link rel="icon" href="{base}/favicon.png" />
</svelte:head>

<section class="hero is-info is-fullheight">
	<div class="hero-body">
		<div class="container">
			<h1 class="title">
				<a href="{base}/">{siteTitle} </a>
			</h1>
			<p class="subtitle">{siteDescription}</p>
			<p class="pb-5">last built on {timestamp.toLowerCase()}</p>

			<Form />
		</div>
	</div>
</section>
