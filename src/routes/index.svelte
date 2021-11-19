<script>
	export const prerender = true;

	import { siteTitle, siteDescription, staticPath } from '$lib/vars/constants.js';
	import { timestamp } from '$lib/BuildTimeStamp.svelte';
	import { base } from '$app/paths';

	import Icon from 'svelte-awesome';
	import { github } from 'svelte-awesome/icons'

	import Form from '$lib/Form.svelte';
	import Results from '$lib/Results.svelte';
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<link rel="icon" href="{staticPath}/favicon.png" />
</svelte:head>

<section class="hero m-0 p-0 is-fullheight">
	<div class="hero-body m-0 p-0 fullwidth">
		<div class="columns is-gapless m-0 fullwidth">
			<div class="form-sidebar columnn p-5 is-one-third fullwidth">
				<h1 class="title is-size-4">
					<a href="{base}/">{siteTitle}</a>
					&nbsp;&nbsp;
					<a class="is-link" href="https://github.com/nyu-dss/viewpoint"><Icon data={github} scale="1.5"/></a>
				</h1>
				<p class="subtitle is-size-6">{siteDescription}</p>
				<p class="is-size-7 has-text-success">!! for experimental use only !!</p>
				<p class="subtitle is-size-7">last built on {timestamp.toLowerCase()}</p>
				<p>
					<img src="{staticPath}/eye.gif" style="margin-left:-20px;width:80px"/><img src="{staticPath}/eye.gif" style="margin-left:-20px;width:80px"/>
				</p>
				<Form />
			</div>
			<div class="results-pane column is-two-thirds fullwidth">
				<Results />
			</div>
		</div>
	</div>
</section>
