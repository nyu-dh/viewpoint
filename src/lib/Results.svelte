<script>
	import { onMount } from 'svelte';

	import { manifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { manifestURI, selectedViewer, query } from '$lib/vars/stores.js';


	let embedCode, absoluteQuery; 
	let appURL = '';

	$: absoluteQuery = appURL + $query;
	$: embedCode = `<iframe src="${absoluteQuery}" height="400"/>`;

	$: $query, generateIframe();

	function generateIframe() {
		if (typeof window !== 'undefined') {
			let existing = document.getElementById('viewer-iframe');
			let iframeContainer = document.getElementById('results-container');

			if (existing !== null) {
				existing.remove();
			}

			let iframe = document.createElement('iframe');
			iframe.setAttribute('src', $query);
			iframe.setAttribute('id', 'viewer-iframe');
			iframe.style.width = '100%';
			iframe.style.height = '400px';
			iframeContainer.prepend(iframe);
		}
	}

	onMount(async () => {
		appURL = window.location.protocol + '//' + window.location.host;
		generateIframe();
	});
</script>

<div id="results-container">
	<div class="query-url-container card my-5">
		<header class="card-header">
		 <p class="card-header-title">Full Screen Link</p>
	 	</header>
		<div class="card-content">
			<a href={absoluteQuery} target="_none">{absoluteQuery}</a>
		</div>
	</div>

	<div class="embed-code-container card my-5">
		<header class="card-header">
		 <p class="card-header-title">Embed Code</p>
	 	</header>
		<div class="card-content embed-code">
			<p style="width:100%;word-wrap:break-word;font-family:monospace;">{embedCode}</p>
		</div>
	</div>
</div>
