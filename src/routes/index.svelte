<script>
	export const prerender = true;

	import { siteTitle, siteDescription } from '$lib/vars/constants.js';
	import { timestamp } from '$lib/BuildTimeStamp.svelte';
	import { base } from '$app/paths';

	import Form from '$lib/Form.svelte';
	import Results from '$lib/Results.svelte';
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<link rel="icon" href="{base}/favicon.png" />
</svelte:head>

<section class="hero is-link">
	<div class="hero-body">
		<div class="container">
			<h1 class="title">
				<a href="{base}/">{siteTitle} </a>
			</h1>
			<p class="subtitle">{siteDescription}</p>
			<p class="">last built on {timestamp.toLowerCase()}</p>
		</div>
	</div>
</section>

<section style="margin: 0 auto;">
	<div class="columns container" style="margin: auto;">
		<div class="columnn content py-5 mr-5 is-narrow">
			<Form />
		</div>
		<div class="column content p-5 is-two-thirds">
			<Results />
		</div>
	</div>
</section>
