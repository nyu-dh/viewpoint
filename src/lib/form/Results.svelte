<script>
	import { onMount } from 'svelte';

	import { manifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { manifestURI, selectedViewer, selectedTheme, query } from '$lib/vars/stores.js';

	$: $query, generateIframe();

	function generateIframe() {
		if (typeof window !== 'undefined') {
			let existing = document.getElementById('viewer-iframe');
			let iframeContainer = document.getElementById('iframeContainer');

			if (existing !== null) {
				existing.remove();
			}

			let iframe = document.createElement('iframe');
			iframe.setAttribute('src', $query);
			iframe.setAttribute('id', 'viewer-iframe');
			iframe.style.width = '100%';
			iframe.style.height = '500px';
			iframeContainer.appendChild(iframe);
		}
	}

	onMount(async () => {
		generateIframe();
	});
</script>

<div class="content mt-5 results" id="iframeContainer">
	<h3>Your Query</h3>
	<p><a href={$query} target="_blank">{$query}</a></p>
</div>
