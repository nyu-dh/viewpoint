<script>
	import { onMount } from 'svelte';

	import { sampleManifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { selectedManifests, selectedViewer, query } from '$lib/vars/stores.js';

	import Icon from 'svelte-awesome';
	import { copy } from 'svelte-awesome/icons';


	let embedCode, absoluteQuery;
	let appURL = '';

	$: absoluteQuery = appURL + $query;
	$: embedCode = `<iframe src="${absoluteQuery}" height="400"/>`;

	$: $query, generateIframe();

	function generateIframe() {
		if (typeof window !== 'undefined') {
			let existing = document.getElementById('viewer-iframe');
			let iframeContainer = document.getElementById('iframe-container');

			if (existing !== null) {
				existing.remove();
			}

			let iframe = document.createElement('iframe');
			iframe.setAttribute('src', $query);
			iframe.setAttribute('id', 'viewer-iframe');
			iframe.style.width = '100%';
			iframe.style.height = '75vh';
			iframeContainer.prepend(iframe);
		}
	}

	onMount(async () => {
		appURL = window.location.protocol + '//' + window.location.host;
		generateIframe();
	});
</script>

<div class="columns is-gapless is-multiline fullwidth">
	<div id="iframe-container" class="column is-12" style="height:75vh;background:#292929"></div>
	<div class="column is-half" style="display: flex;">
		<article class="message is-primary">
		  <div class="message-header">
		    <p>Link to Full Screen Viewer</p>
		  </div>
		  <div class="message-body">
				<p style="font-size:.8rem;word-wrap:break-word;">
					<a href={absoluteQuery} target="_none">{absoluteQuery}</a>
				</p>
		  </div>
		</article>
	</div>

	<div class="column is-half" style="display: flex;">
		<article class="message is-link mr-5">
		  <div class="message-header">
		    <p>Embed Code&nbsp;&nbsp;&nbsp;<a title="Copy to clipboard (WiP!)"><Icon data={copy} /></a></p>
		  </div>
		  <div class="message-body">
		    <p style="font-size:.8rem;word-wrap:break-word;font-family:monospace;">{embedCode}</p>
			</div>
		</article>
	</div>
</div>
